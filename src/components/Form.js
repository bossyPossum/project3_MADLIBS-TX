  
import React, { Component } from 'react';
import Madlibz from './utils';

export default class MadlibzForm extends Component {
    constructor() {
      super();
      this.state = {
        templates: [],
        title: '',
        inputFields: [],
      };
    }

    componentDidMount() {
      // console.log ('mounted');
      Madlibz.getRandomMadlibTemplate().then(result => {
        const madlibzTemplate = result.data
        this.setState({ title: madlibzTemplate.title })
        this.setState({ inputFields: madlibzTemplate.blanks })
        console.log ( result.data.blanks.length )
        // console.log ( result.data.value )
        // this.setState({ story: madlibzTemplate.value }) // for the story
      });
    }
  
    render() {
      return (
        <container>
          <div>
            <h5> {this.state.title}</h5>
            <h6> {this.state.inputFields[0]} </h6>
            <h6> {this.state.inputFields[1]} </h6>
            <h6> {this.state.inputFields[2]} </h6>
            <h6> {this.state.inputFields[3]} </h6>
          </div>
        </container>
      )
    }
  }