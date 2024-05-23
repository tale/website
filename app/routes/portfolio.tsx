import {
	SiAmazonaws,
	SiAzuredevops,
	SiC,
	SiClickhouse,
	SiCloudflare,
	SiCloudflareworkers,
	SiCmake,
	SiCsharp,
	SiDocker,
	SiElastic,
	SiGit,
	SiGithubactions,
	SiGo,
	SiHetzner,
	SiHomebrew,
	SiIos,
	SiKubernetes,
	SiMacos,
	SiMongodb,
	SiMonogame,
	SiNextdotjs,
	SiOpengl,
	SiOpenjdk,
	SiPostgresql,
	SiPython,
	SiReact,
	SiRedis,
	SiRemix,
	SiRust,
	SiSpring,
	SiSvelte,
	SiSwift,
	SiTypescript,
	SiVisualstudiocode,
	SiXcode,
} from '@icons-pack/react-simple-icons'
import { Link } from '@remix-run/react'

import { ReactComponent as GMU } from '~/assets/gmu.svg'
import { ReactComponent as Swift } from '~/assets/swift.svg'
import Experience from '~/components/Experience'
import Project from '~/components/Project'
import Skill from '~/components/Skill'
import TinySkill from '~/components/TinySkill'

export default function Page() {
	return (
		<>
			<h2
				id="experience"
				className="font-serif text-2xl my-4"
			>
				Experience
			</h2>
			<div className="grid grid-cols-1 gap-8">
				<Experience
					name="SWIFTnet Automation Intern"
					where="Swift"
					when="June 2024 - August 2024"
					description={`
						This summer I'm working at Swift, the world standard
						for secure financial messaging across global financial
						institutions.
					`}
					link="https://swift.com"
					icon={Swift}
				/>
				<Experience
					name="Teaching Assistant (Adjunct)"
					where="GMU"
					when="August 2023 - May 2025"
					description={`
						I teach a variety of students for the Computer Science
						CS 161: Introduction to Low-level Programming course.
						The class covers C, Unix, and a dive into how
						systems programming works. My responsibilities include
						handling labs, conducting review sessions, and
						proctoring exams.
					`}
					link="https://cs.gmu.edu"
					icon={GMU}
				/>
				<Experience
					name="Computer Science, B.S."
					where="GMU"
					when="August 2022 - May 2025"
					description={`
						I'm pursuing a Bachelor of Science in Computer Science
						at George Mason University. I've written a paper on the
						dangers posed by artificial intelligence and created a
						set of guidelines to make a safety framework for AI.
					`}
					link="https://gmu.edu"
					icon={GMU}
				/>
			</div>

			<hr className="mt-2" />
			<h2
				id="skills"
				className="font-serif text-2xl my-4"
			>
				Technical Skills
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				<Skill name="TypeScript" year={2016} icon={SiTypescript} />
				<Skill name="C/C++" year={2019} icon={SiC} />
				<Skill name="Rust" year={2021} icon={SiRust} />
				<Skill name="Go" year={2023} icon={SiGo} />
				<Skill name="React" year={2018} icon={SiReact} />
				<Skill name="Kubernetes" year={2021} icon={SiKubernetes} />
				<Skill name="Docker (Compose)" year={2020} icon={SiDocker} />
				<Skill name="AWS" year={2021} icon={SiAmazonaws} />
			</div>

			<div className="flex gap-2 mt-10 flex-wrap">
				<TinySkill name="Git" year={2016} icon={SiGit} />
				<TinySkill name="PostgreSQL" year={2020} icon={SiPostgresql} />
				<TinySkill name="Java" year={2015} icon={SiOpenjdk} />
				<TinySkill name="Spring" year={2023} icon={SiSpring} />
				<TinySkill name="Python" year={2017} icon={SiPython} />
				<TinySkill name="Xcode" year={2019} icon={SiXcode} />
				<TinySkill name="Objective-C" year={2019} icon={SiIos} />
				<TinySkill name="Swift" year={2020} icon={SiSwift} />
				<TinySkill name="MongoDB" year={2020} icon={SiMongodb} />
				<TinySkill name="Elasticsearch" year={2021} icon={SiElastic} />
				<TinySkill name="Clickhouse" year={2021} icon={SiClickhouse} />
				<TinySkill name="Redis" year={2021} icon={SiRedis} />
				<TinySkill name="Cloudflare" year={2018} icon={SiCloudflare} />
				<TinySkill name="Svelte" year={2020} icon={SiSvelte} />
				<TinySkill name="Remix" year={2021} icon={SiRemix} />
				<TinySkill name="Next.js" year={2021} icon={SiNextdotjs} />
				<TinySkill name="C#" year={2019} icon={SiCsharp} />
				<TinySkill name="MonoGame" year={2020} icon={SiMonogame} />
			</div>
			<p className="my-4 text-sm text-neutral-500 dark:text-neutral-400">
				Tip: Hover/Tap on each icon for more information.
			</p>

			<hr className="mt-2" />
			<h2
				id="projects"
				className="font-serif text-2xl mt-4 mb-2"
			>
				Projects
			</h2>
			<p className="my-4">
				This is a chronological list of projects I have worked on that are publicly available.
				There are many more private projects that I have worked on, but they are not listed here.
				The best place to learn about them is on my
				{' '}
				<Link
					to="/blog"
					className="underline"
				>
					blog
				</Link>
				{' '}
				or contacting me directly at
				{' '}
				<a
					className="underline"
					href="mailto:aarnavtale@icloud.com"
				>
					aarnavtale@icloud.com
				</a>
				{' '}
				if you are a recruiter.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<Project
					name="Headplane"
					description="A proper management plane for Headscale, the self-hosted Tailscale controller"
					link="https://github.com/tale/headplane"
					icons={[SiRemix, SiReact, SiTypescript]}
				/>
				<Project
					name="trap2"
					description="A suckless-inspired, GPU accelerated terminal emulator built on libvterm"
					link="https://github.com/tale/trap2"
					icons={[SiC, SiCmake, SiOpengl]}
				/>
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
					name="Chariz"
					description="Enabling developers to easily sell and distribute their software on iOS"
					link="https://chariz.com"
					icons={[SiTypescript, SiMongodb, SiReact, SiKubernetes]}
				/>
				<Project
					name="bruh"
					description="A much faster alternative to the brew CLI for macOS packaging"
					link="https://github.com/tale/bruh"
					icons={[SiTypescript, SiHomebrew]}
				/>
				<Project
					name="masonmaps"
					description="A clone of the popular GeoGuessr game for George Mason University"
					link="https://github.com/tale/masonmaps"
					icons={[SiOpenjdk, SiSpring]}
				/>
				<Project
					name="calboard"
					description="Minimal BlackBoard calendar proxy that fixes deadlines and cleans up clutter"
					link="https://github.com/tale/calboard"
					icons={[SiTypescript, SiCloudflareworkers]}
				/>
				<Project
					name="kittea-bot"
					description="A bridge between Minecraft Hypixel's in-game chat and a Discord server"
					link="https://github.com/tale/kittea-bot"
					icons={[SiTypescript, SiKubernetes]}
				/>
				<Project
					name="daview"
					description="Proxy a WebDAV instance with a nicer UI and authentication"
					link="https://github.com/tale/daview"
					icons={[SiTypescript, SiKubernetes, SiHetzner]}
				/>
				<Project
					name="iconset"
					description="A nifty command-line tool to customize macOS icons quickly"
					link="https://github.com/tale/iconset"
					icons={[SiSwift, SiMacos]}
				/>
				<Project
					name="logos-vscode"
					description="Syntax and rich editor support for the Logos preprocessing language in VS Code"
					link="https://github.com/tale/logos-vscode"
					icons={[SiTypescript, SiVisualstudiocode, SiAzuredevops]}
				/>
				<Project
					name="Sileo"
					description="The standard package manager that ships on thousands of jailbroken iOS devices"
					link="https://getsileo.app"
					icons={[SiSwift, SiIos]}
				/>
				<Project
					name="lyricify"
					description="View song lyrics from your lock screen on iOS or iPadOS, regardless of the music app"
					link="https://chariz.com/buy/lyricify"
					icons={[SiSwift, SiIos]}
				/>
				<Project
					name="notations"
					description="The sticky notes experience reimagined for iOS and iPadOS"
					link="https://github.com/tale/notations"
					icons={[SiSwift, SiIos]}
				/>
				<Project
					name="Slinky.codes"
					description="An incentive-based Python learning platform targeted towards kids (VTHacks IX)"
					link="https://devpost.com/software/learn-py"
					icons={[SiReact, SiPostgresql, SiTypescript, SiDocker]}
				/>
				<Project
					name="Grapple"
					description="A wild space grappling game! (AcademiesHacks2 winning project)"
					link="https://devpost.com/software/grappel"
					icons={[SiCsharp, SiMonogame]}
				/>
				<Project
					name="Supernova"
					description="A procedurally generated, infinite space shooter! (HackBI IV winning project)"
					link="https://devpost.com/software/supernova-18oqzl"
					icons={[SiCsharp, SiMonogame]}
				/>
			</div>
		</>
	)
}
