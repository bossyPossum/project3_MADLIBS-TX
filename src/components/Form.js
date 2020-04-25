  
import React, { Component } from 'react';
import Madlibz from './utils';

export default class MadlibzForm extends Component {
    constructor() {
      super();
      this.state = {
      };
    }

    componentDidMount() {
      // const { template } = this.props.match.params;
      console.log ('mounted');
      Madlibz.getRandomMadlibTemplate().then(result => {
        console.log ( result.data )
        // this.setState({template: result.data});
      });
    }
  
    render() {
      return (
        <div >
          <h1> see if i can get API</h1>
        </div>
      )
    }
  }