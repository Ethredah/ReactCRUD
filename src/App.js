import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';
import Users from './Users';


class App extends Component {
  render() {
    return (
      <div className="App">

      <br/>
      	
      	{/*NavBar*/}

      		<nav class="navbar navbar-expand-lg navbar-light bg-primary">
			  <a class="navbar-brand" href="#">Crud Application</a>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>
			  
			</nav>

      	{/*NavBar*/}
          
          <hr/>

          <Users />

      </div>
    );
  }
}

export default App;
