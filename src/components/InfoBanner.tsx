import React, { Component } from 'react'
import { IoPeopleCircle, IoGlobe } from 'react-icons/io5'

interface InfoBannerProps {
	name: string
	description: string
	location: string
	company: {
		name: string
		website: string
	}
}

export default class InfoBanner extends Component<InfoBannerProps> {
	render() {
		return (
			<div className="info-banner">
				<h1>{this.props.name.toUpperCase()}</h1>
				<p>{this.props.description}</p>
				<br />
				<a href={this.props.company.website}>
					<IoPeopleCircle />
					<span>{this.props.company.name}</span>
				</a>
				<a href="#" rel="noopener noreferrer">
					<IoGlobe />
					<span>{this.props.location}</span>
				</a>
				<br />
			</div>
		)
	}
}
