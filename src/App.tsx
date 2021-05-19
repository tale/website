import InfoBanner from './components/InfoBanner'
import ContactCard from './components/ContactCard'
import ProjectsCard from './components/ProjectsCard'
import ResourcesCard from './components/ResourcesCard'
import TechnologyCard from './components/TechnologyCard'
import React, { Component } from 'react'

interface AppState {
	width: number
}

export default class App extends Component<unknown, AppState> {
	state = {
		width: window.innerWidth
	}

	componentDidMount() {
		window.addEventListener('resize', () => this.setState({ width: window.innerWidth }))
	}

	render() {
		return (
			<>
				<InfoBanner
					name="Aarnav Tale"
					location="Virginia, United States"
					description="Developer"
					company={{
						name: 'HASHBANG Productions',
						website: 'https://hashbang.productions'
					}}
				/>
				<div className="cards">
					<div>
						<TechnologyCard />
						{this.state.width <= 1024 && <ProjectsCard />}
						<div className="cards subcards">
							<ResourcesCard />
							<ContactCard
								github="tale"
								twitter="aarnavtale"
								keybase="aarnavtale"
								mail="aarnav@tale.me"
							/>
						</div>
					</div>
					{this.state.width > 1024 && <ProjectsCard />}
				</div>
			</>
		)
	}
}
