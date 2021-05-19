import React, { Component } from 'react'

const projects = [
	{
		name: 'Lyricify',
		description: 'iOS Runtime Modification Tweak allowing you to view song lyrics on the lockscreen',
		link: 'https://chariz.com/buy/lyricify/'
	},
	{
		name: 'Canister',
		description: 'API for querying packages and repositories commonly used in the Jailbreak Community',
		link: 'https://canister.me/'
	},
	{
		name: 'Chariz',
		description: 'A marketplace for iOS runtime tweaks and applications',
		link: 'https://chariz.com/'
	},
	{
		name: 'madebymirac',
		description: 'A wallpaper site showcasing works by Mirac',
		link: 'https://madebymirac.com/'
	},
	{
		name: 'Heron',
		description: 'A consolidated API with licensing, cryptography, and a database'
	}
]

export default class ProjectsCard extends Component {
	render() {
		return (
			<div className="card project-card">
				<h1>Active Projects</h1>
				<ul>
					{projects.map(project => {
						if (project.link) {
							return (
								<li key={project.name} className="list-object">
									<a className="list-link" href={project.link}>
										<strong style={{ textDecoration: 'underline' }}>{project.name}</strong>: {project.description}
									</a>
								</li>
							)
						} else {
							return (
								<li key={project.name} className="list-object">
									<strong>{project.name}</strong>: {project.description}
								</li>
							)
						}
					})}
				</ul>
			</div>
		)
	}
}
