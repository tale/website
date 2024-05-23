import {
	SiGithub,
	SiGithubactions,
	SiGo,
	SiKubernetes,
	SiLinkedin,
	SiMongodb,
	SiPostgresql,
	SiReact,
	SiRemix,
	SiRust,
	SiTypescript,
	SiX,
} from '@icons-pack/react-simple-icons'
import { Link } from '@remix-run/react'

import Project from '~/components/Project'

/* eslint-disable react/no-unescaped-entities */
export default function Page() {
	return (
		<>
			<p>
				Hey! I'm Aarnav, a software engineer based in Washington, D.C.
				I specialize in building low-level backend systems and DevOps.
				I'm currently working on my Bachelor's degree in Computer Science at George Mason University in Fairfax, VA.
			</p>
			<br />
			<p>
				You may have seen me around the internet as I maintain and contribute to a few open-source projects.
				I work on whatever interests me or serves to improve my own workflows.
				Outside of programming, I value spending time outdoors.
			</p>

			<hr className="mt-2" />
			<h2 className="font-serif text-2xl my-4">Current Projects</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<Project
					name="Canister"
					description="High-speed search engine and analytics aggregator for iOS APT repositories"
					link="https://canister.me"
					icons={[SiRust, SiGo, SiTypescript, SiPostgresql, SiKubernetes]}
				/>
				<Project
					name="kubectl-action"
					description="GitHub Action to interact with Kubernetes clusters using kubectl"
					link="https://github.com/tale/kubectl-action"
					icons={[SiTypescript, SiGithubactions, SiKubernetes]}
				/>
				<Project
					name="Headplane"
					description="A proper management plane for Headscale, the self-hosted Tailscale controller"
					link="https://github.com/tale/headplane"
					icons={[SiRemix, SiReact, SiTypescript]}
				/>
				<Project
					name="Chariz"
					description="Enabling developers to easily sell and distribute their software on iOS"
					link="https://chariz.com"
					icons={[SiTypescript, SiMongodb, SiReact, SiKubernetes]}
				/>
			</div>
			<p className="my-4 text-sm">
				View
				{' '}
				<Link
					to="/portfolio#projects"
					className="underline"
				>
					all projects
				</Link>
				{' '}
				or visit my
				{' '}
				<a
					className="underline"
					href="https://github.com/tale"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
				{' '}
				profile.
			</p>
			<hr className="my-2" />
			<div>
				<a
					href="https://github.com/tale"
					target="_blank"
					rel="noreferrer"
				>
					<SiGithub size={24} className="inline-block mr-2" />
				</a>
				<a
					href="https://x.com/aarnavtale"
					target="_blank"
					rel="noreferrer"
				>
					<SiX size={24} className="inline-block mr-2" />
				</a>
				<a
					href="https://linkedin.com/in/aarnavtale"
					target="_blank"
					rel="noreferrer"
				>
					<SiLinkedin size={24} className="inline-block mr-2" />
				</a>
			</div>
		</>
	)
}
