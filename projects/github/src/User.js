import React, { Component} from 'react';



export default class User extends Component {
	render() {
		const {avatar_url, name, followers, following, public_repos, login, html_url } = this.props.data;
		return(
				<div className="main-container">
					<section className="user-info">
						<img className="user-img" src={avatar_url} alt='user'/>
						<div className="user-information">
							<div>
								<h1 className="user-heading">{name}</h1>
								<a  className="user-id" href={html_url}>@{login}</a>
							</div>
							<div>
							<div className="github-status">
								<span className="follow-count">{followers}</span>
								<span className="user-contact">Follower</span>
							</div>
							<div className="github-status">
								<span className="follow-count">{following}</span>
								<span className="user-contact">Following</span>
							</div>
							<div className="github-status">
								<span className="follow-count">{public_repos}</span>
								<span className="user-contact">Repos</span>
							</div>
							</div>
						</div>
					</section>
					
				</div>
			)
	}
}