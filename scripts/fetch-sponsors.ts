import { writeFile } from "node:fs/promises";
import { graphql } from "@octokit/graphql";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
if (!GITHUB_TOKEN) {
  console.error("GITHUB_TOKEN environment variable is required");
  process.exit(1);
}

const api = graphql.defaults({
  headers: {
    authorization: `token ${GITHUB_TOKEN}`,
  },
});

interface Sponsorship {
  isActive: boolean;
  sponsorEntity: {
    __typename: string;
    login: string;
    name: string | null;
    avatarUrl: string;
    url: string;
  };

  tier: {
    isOneTime: boolean;
    monthlyPriceInDollars: number;
  };
}

const { viewer } = await api<{
  viewer: {
    sponsorshipsAsMaintainer: {
      totalCount: number;
      nodes: Sponsorship[];
    };
  };
}>(`{
  viewer {
	sponsorshipsAsMaintainer(first: 100, activeOnly: false) {
	  totalCount
	  nodes {
		isActive
		tier {
		  isOneTime
		  monthlyPriceInDollars
		}
		sponsorEntity {
		  __typename
		  ... on User { login avatarUrl url }
		  ... on Organization { login name avatarUrl url }
		}
	  }
	}
  }
}`);

const total = viewer.sponsorshipsAsMaintainer.totalCount;
const sponsorIndividuals = viewer.sponsorshipsAsMaintainer.nodes
  .filter(
    (s) =>
      s.sponsorEntity.__typename === "User" &&
      s.isActive &&
      !s.tier.isOneTime &&
      s.tier.monthlyPriceInDollars >= 5,
  )
  .map((s) => ({
    id: s.sponsorEntity.login,
    name: s.sponsorEntity.login,
    avatar: s.sponsorEntity.avatarUrl,
    url: s.sponsorEntity.url,
  }));

const sponsorOrganizations = viewer.sponsorshipsAsMaintainer.nodes
  .filter((s) => s.sponsorEntity.__typename === "Organization")
  .map((s) => ({
    id: s.sponsorEntity.login,
    name: s.sponsorEntity.name ?? s.sponsorEntity.login,
    avatar: s.sponsorEntity.avatarUrl,
    url: s.sponsorEntity.url,
  }));

const output = {
  users: sponsorIndividuals,
  orgs: sponsorOrganizations,
  totalStat: [
    {
      id: "total",
      total,
    },
  ],
};

await writeFile("content/sponsors.json", JSON.stringify(output, null, "\t") + "\n");
console.log(
  `Fetched ${sponsorIndividuals.length} individual sponsors and ${sponsorOrganizations.length} organization sponsors (total: ${total})`,
);
