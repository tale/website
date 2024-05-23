import {
	SiAmazonaws,
	SiC,
	SiClickhouse,
	SiCloudflare,
	SiDocker,
	SiElastic,
	SiGit,
	SiGo,
	SiIos,
	SiKubernetes,
	SiMongodb,
	SiNextdotjs,
	SiOpenjdk,
	SiPostgresql,
	SiPython,
	SiReact,
	SiRedis,
	SiRemix,
	SiRust,
	SiSvelte,
	SiSwift,
	SiTypescript,
	SiXcode,
} from '@icons-pack/react-simple-icons'

import { ReactComponent as GMU } from '~/assets/gmu.svg'
import { ReactComponent as Swift } from '~/assets/swift.svg'
import Experience from '~/components/Experience'
import Skill from '~/components/Skill'
import TinySkill from '~/components/TinySkill'

export default function Page() {
	return (
		<>
			<h2 className="font-serif text-2xl my-4">Experience</h2>
			<div className="grid grid-cols-1 gap-8 md:gap-6">
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
			<h2 className="font-serif text-2xl my-4">Technical Skills</h2>

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
			</div>
			<p className="my-4 text-sm text-neutral-500 dark:text-neutral-400">
				Tip: Hover/Tap on each icon for more information.
			</p>
		</>
	)
}
