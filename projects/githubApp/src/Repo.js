import React, { Component } from 'react';

export default class Repo extends Component {
	constructor() {
		super();
		this.state = {
			userRepo: []
		}
	}
	componentWillMount() {
		fetch(`https://api.github.com/users/${this.props.userName}/repos`)
		.then(res => res.json())
		.then(d => this.setState({
			userRepo: d
		}))
	}

componentWillUpdate() {
		fetch(`https://api.github.com/users/${this.props.userName}/repos`)
		.then(res => res.json())
		.then(d => this.setState({
			userRepo: d
		}))
	}

	render() {
		return(
				<div className="repo-container">
					<h1>Repos</h1>
					{
						this.state.userRepo.map(repo => (
							<div className="repo-wrapper">
								<a className="repo-name" href={repo.html_url}>{repo.name}</a>
								<p>{repo.description}</p>
								<div className="repo-description">
									<span>{repo.language}</span>
									<span>{repo.stargazers_count}</span>
									<i className="fas fa-star"></i>

									<span>{repo.forks_count}</span>
									<i class="fas fa-code-branch"></i>
								</div>
							</div>
							))
					}
				</div>
			)
	}
}