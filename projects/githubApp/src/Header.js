import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return(
				<header>
					<div className="heading">
						<i className="fab fa-github git"></i>
						<h1 className="hero-header">Github User Search</h1>
					</div>

					<form onSubmit={this.props.searchUser}>
						<input id="userName" type="text" placeholder="Search for a user, e.g. simonsmith" />
					</form>
				</header>
			)
	}
}