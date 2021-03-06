import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

import { withAuthenticator } from 'aws-amplify-react';
import { Auth } from 'aws-amplify';

import StorageButton from './StorageButton';
import S3ImageUpload from './S3ImageUpload';

class App extends Component {

  signOut() {
    Auth.signOut();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <StorageButton />
          <S3ImageUpload />          
        </header>      
      </div>
    );
  }
}

export default withAuthenticator(App, { includeGreetings: true });
