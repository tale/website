import React, { Component } from 'react'
import TooltipIcon from './TooltipIcon'
import { SiVim, SiTypescript, SiSwift, SiWebstorm, SiVisualstudiocode, SiJest, SiReact, SiKubernetes, SiDocker, SiGithub, SiNodeDotJs, SiMongodb, SiPostgresql, SiDirectus, SiSvelte, SiXcode, SiGooglecloud, SiPython, SiCsharp, SiC, SiJava, SiKotlin, SiSass, SiAzuredevops, SiAtlassian, SiCloudflare, SiGatsby, SiGit, SiPostman, SiNginx, SiSentry, SiTerraform, SiYarn, SiTailwindcss, SiKeras, SiJavascript } from 'react-icons/si'

export default class TechnologyCard extends Component {
	render() {
		return (
			<div className="card technology">
				<h1>Technologies I Use</h1>
				<TooltipIcon description="Atlassian — Jira & Trello">
					<SiAtlassian />
				</TooltipIcon>
				<TooltipIcon description="Azure — DevOps & Marketplace">
					<SiAzuredevops />
				</TooltipIcon>
				<TooltipIcon description="Cloudflare — DNS & Argo Stream Tunneling">
					<SiCloudflare />
				</TooltipIcon>
				<TooltipIcon description="Directus — Content Management System">
					<SiDirectus />
				</TooltipIcon>
				<TooltipIcon description="Docker — CRI & Open Container Initiative">
					<SiDocker />
				</TooltipIcon>
				<TooltipIcon description="Git — Version Control Software">
					<SiGit />
				</TooltipIcon>
				<TooltipIcon description="Github — VCS & Actions">
					<SiGithub />
				</TooltipIcon>
				<TooltipIcon description="Google Cloud — Compute Engine & GKE">
					<SiGooglecloud />
				</TooltipIcon>
				<TooltipIcon description="Kubernetes — Container Orchestration">
					<SiKubernetes />
				</TooltipIcon>
				<TooltipIcon description="Nginx — Reverse Proxy & Ingress/Egress Controller">
					<SiNginx />
				</TooltipIcon>
				<TooltipIcon description="Postman — API Tool">
					<SiPostman />
				</TooltipIcon>
				<TooltipIcon description="Sentry — Application Monitoring">
					<SiSentry />
				</TooltipIcon>
				<TooltipIcon description="Terraform — Infrastructure Bootstrap">
					<SiTerraform />
				</TooltipIcon>
				<TooltipIcon description="Yarn — Plug 'n Play Package Manager">
					<SiYarn />
				</TooltipIcon>
				<TooltipIcon description="Vim & Neovim">
					<SiVim />
				</TooltipIcon>
				<TooltipIcon description="Visual Studio Code">
					<SiVisualstudiocode />
				</TooltipIcon>
				<TooltipIcon description="JetBrains Webstorm IDE">
					<SiWebstorm />
				</TooltipIcon>
				<TooltipIcon description="Apple Xcode IDE">
					<SiXcode />
				</TooltipIcon>

				<br />
				<br />

				<TooltipIcon description="C/Objective C">
					<SiC />
				</TooltipIcon>
				<TooltipIcon description="C# & .NET">
					<SiCsharp />
				</TooltipIcon>
				<TooltipIcon description="Gatsby SSG">
					<SiGatsby />
				</TooltipIcon>
				<TooltipIcon description="Java — LWJGL & Minecraft">
					<SiJava />
				</TooltipIcon>
				<TooltipIcon description="JavaScript — ECMAScript & CommonJS">
					<SiJavascript />
				</TooltipIcon>
				<TooltipIcon description="Jest — Testing Platform">
					<SiJest />
				</TooltipIcon>
				<TooltipIcon description="Keras — Data Modeling & AI">
					<SiKeras />
				</TooltipIcon>
				<TooltipIcon description="Kotlin — Mini2dx & Game Development">
					<SiKotlin />
				</TooltipIcon>
				<TooltipIcon description="MongoDB — NoSQL Document Database">
					<SiMongodb />
				</TooltipIcon>
				<TooltipIcon description="NodeJS — Full Stack Applications">
					<SiNodeDotJs />
				</TooltipIcon>
				<TooltipIcon description="Postgres — SQL Database">
					<SiPostgresql />
				</TooltipIcon>
				<TooltipIcon description="Python — Web Scraping">
					<SiPython />
				</TooltipIcon>
				<TooltipIcon description="React — Fully featured Web Apps">
					<SiReact />
				</TooltipIcon>
				<TooltipIcon description="Sass — Sassy and Powerful CSS">
					<SiSass />
				</TooltipIcon>
				<TooltipIcon description="Svelte — Lightweight Web Apps">
					<SiSvelte />
				</TooltipIcon>
				<TooltipIcon description="Swift — iOS App Development">
					<SiSwift />
				</TooltipIcon>
				<TooltipIcon description="Tailwind — Fast CSS Framework">
					<SiTailwindcss />
				</TooltipIcon>
				<TooltipIcon description="TypeScript — ExpressJS, Koa, Passport & ORMs">
					<SiTypescript />
				</TooltipIcon>
			</div>
		)
	}
}
