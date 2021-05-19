import { Component } from 'preact'
import { FiBox, FiFileText, FiMail, FiInfo } from 'react-icons/fi'

export default class ResourcesCard extends Component {
	render() {
		return (
			<div class="card">
				<h1>Resources/Links</h1>
				<a href="#">
					<FiFileText />
					<span>Resume (Soon)</span>
				</a>
				<a href="#">
					<FiMail />
					<span>Blog (Soon)</span>
				</a>
				<a href="#">
					<FiInfo />
					<span>Status Page (Soon)</span>
				</a>
				<a href="https://apt.tale.me/">
					<FiBox />
					<span>iOS APT Repository</span>
				</a>
			</div>
		)
	}
}
