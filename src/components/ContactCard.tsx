import { Component } from 'preact'
import { SiMailDotRu, SiGithub, SiTwitter, SiKeybase } from 'react-icons/si'

interface ContactCardProps {
	mail: string
	github: string
	twitter: string
	keybase: string
}

export default class ContactCard extends Component<ContactCardProps> {
	render() {
		return (
			<div class="card">
				<h1>Contact Me</h1>
				<a href={`mailto:${this.props.mail}`}>
					<SiMailDotRu />
					<span>{this.props.mail}</span>
				</a>
				<a href={`https://twitter.com/${this.props.twitter}/`}>
					<SiTwitter />
					<span>@{this.props.twitter}</span>
				</a>
				<a href={`https://keybase.io/${this.props.github}/`}>
					<SiKeybase />
					<span>@{this.props.keybase}</span>
				</a>
				<a href={`https://github.com/${this.props.github}/`}>
					<SiGithub />
					<span>@{this.props.github}</span>
				</a>
			</div>
		)
	}
}
