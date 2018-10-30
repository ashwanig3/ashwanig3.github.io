import React, { Component } from 'react';
import Header from './Header';
import User from './User';
import Follower from './Followers';
import Repo from './Repo'


class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      data: {},
      username: null
    }
  }
  searchUser = (e) => {
    e.preventDefault();
    var userName = document.getElementById("userName").value;
    this.setState({ username: userName})
    var url = `https://api.github.com/users/${userName}`;
    fetch(url).then(res => res.json()).then(d => 
      this.setState({
        data: d
      })
    )
  }
  render() {
    let item;
    if(Object.keys(this.state.data).length === 0) {
      item = <div></div>
    } else {
      item = <div>
                <User data ={this.state.data} />
                <div className="user-description">
                  <Repo userName={this.state.username} />
                  <Follower userName={this.state.username} data={this.state.data} /> 
                </div>
              </div>
    }
    return (
      <div className="App">
        <Header searchUser={this.searchUser} />
        <main>
          {
            item
          }
          
        </main>
      </div>
    );
  }
}

export default App;
