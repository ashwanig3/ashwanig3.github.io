import React, { Component } from 'react';

export default class Follower extends Component {
	constructor(props) {
		super(props);
    console.log(this.props, 'app')

		this.state = {
			userFollower: [],
			username: this.props.username
		}
	}

	componentWillMount() {
		fetch(this.props.data.followers_url)
		.then(res => res.json())
		.then(d => this.setState({
			userFollower: d
		}))
	}


	componentWillUpdate() {
		fetch(this.props.data.followers_url)
		.then(res => res.json())
		.then(d => this.setState({
			userFollower: d
		}))
	}

	render() {
		return(
				<div className="follower-wrapper">
					<h1>Followers</h1>
					{
						this.state.userFollower.map(follower => (
						<div className="follower-card">
								<img className="follower-img" src={follower.avatar_url} alt='follower'/>
								<h3 className="follower-name">{follower.login}</h3>
							</div>
						))
					}

				</div>
			)
	}
}