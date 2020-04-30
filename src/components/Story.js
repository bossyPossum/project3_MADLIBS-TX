import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Madlibz from './utils';

export default class Story extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      templates: [],
      title: '',
      blanks: [],
      blank: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // this.props.history.push(`/story/${ title }`);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log ( id )
    Madlibz.getRandomMadlibTemplate().then(result => {
      console.log( result.data )
      const templates = result.data
      this.setState({ title: templates[ id -1 ].title })
      this.setState({ blanks: templates[ id - 1 ].blanks }) // setting the state to dispaly the blans
      this.setState({ value: templates[ id - 1 ].value }) // displaying the story
    });
  }

  render() {
    if(!this.props.location.state) {
      return ( <Redirect to='/' /> )
    }
    if (this.state.value === null) {
      return (<div>Loading...</div>);
    }
    return (
        <div>
          <h2> {this.state.title} </h2>
          <h5> {this.props.location.state.newSentence} </h5>
          <input 
            type="submit" 
            value="Submit" 
            className="button-symptom-submit" 
          />
        </div>
    )
  }
}