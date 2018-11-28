import React, { Component } from 'react';
import { Storage } from 'aws-amplify';

class StorageButton extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: ''
    }
    this.addToStorage = this.addToStorage.bind(this);
    this.readFromStorage = this.readFromStorage.bind(this);    
  }

  // create function to work with Storage
  addToStorage = () => {
    Storage.put('javascript/MyReactComponent.js', `
      import React from 'react'
      const App = () => (
        <p>Hello World</p>
      )
      export default App
    `)
      .then (result => {
        console.log('result: ', result);
      })
      .catch(err => console.log('error: ', err));
  }
  
  readFromStorage = () => {
    Storage.get('javascript/MyReactComponent.js')
      .then(data => {
        console.log('data from S3: ', data);
        this.setState({
          data: data
        })
      })
      .catch(err => console.log('error'))
  }  

  render() {
    return (
      <div>
        <button onClick={this.addToStorage}>Add To Storage</button>
        <button onClick={this.readFromStorage}>Read From Storage</button>
        <div>{this.state.data}</div> 
      </div>    
    );
  }
}

export default StorageButton;