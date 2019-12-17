import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {serverResponse: '' };
    }
    // declaring method to fetch data from the /server and store the response on 'this.state.'
    callServer() {
        fetch('http://localhost:9000/testServer')
            .then(res => res.text())
            .then(res => this.setState({ serverResponse: res }))
            .catch(err => err);
    };
    // react lifecycle method to execute the 'callServer()' once it is mounted
    componentDidMount() {
        this.callServer();
    };


    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                {this.state.serverResponse}
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        );
    }
}



export default App;
