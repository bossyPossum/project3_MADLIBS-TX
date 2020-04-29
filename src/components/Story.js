import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Madlibz from './utils';

export default class Story extends Component {
  constructor(props) {
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
      console.log ( '1st sentence of story index 2:', templates[2].value[0] ) //displaying the first element of this story
      console.log ( '2nd sentence of story index 2:', templates[2].value[1] )//displaying the second element of this story
    });
  }

  render() {
    if (this.state.value === null) {
      return (<div>Loading...</div>);
    }
    return (
      <container>
        <div>
          <h5> {this.state.title} </h5>
          <h5> {this.state.value} </h5>
          <input 
            type="submit" 
            value="Submit" 
            className="button-symptom-submit" 
          />
        </div>
      </container>
    )
  }
}