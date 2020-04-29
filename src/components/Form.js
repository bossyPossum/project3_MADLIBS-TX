import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Madlibz from './utils';

class MadlibzForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word:'',
      templates: [],
      title: '',
      blanks: [],
      blank: '',
      id: '',
      answers: []
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value})
    const index = parseInt(event.target.name);
    const newAnswers = [...this.state.answers] ; //copy of the previous blank 
    newAnswers[ index ] = event.target.value // assign index to each value in newAnswers //
    this.setState({ answers: newAnswers })// this set the State of newAnswers
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    const { id } = this.props.match.params;
    //to push new inputs fields to story. each input field goes into the end of each array
    let newSentence = [];
    for (let i = 0; i < this.state.value.length; i++) {
    //   const sentence = value[i] + answer[i];
      // newSentence.push(sentence);
    }
    console.log( newSentence )
    console.log( this.state.answers ) // array of new inputs
    console.log( this.state.value ) // first input of three little pigs
    console.log( 'hello' )
    this.props.history.push(`/story/${ id }`);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    Madlibz.getRandomMadlibTemplate().then(result => {
      console.log( result.data )
      const templates = result.data
      this.setState({ title: templates[ id -1 ].title })
      this.setState({ blanks: templates[ id - 1 ].blanks })
      this.setState({ value: templates[ id - 1 ].value })
      console.log ( '1st sentence of story index 2:', templates[2].value[0] ) //displaying the first element of this story
      console.log ( '2nd sentence of story index 2:', templates[2].value[1] )//displaying the second element of this story
      this.setState({ answers: Array(this.state.blanks.length).fill('')}) //grab the length of the blank state // TODO look up whats Array in MDN.
      
    });
  }

  render() {
    const { id } = this.props.match.params;
    if (this.state.blanks === null) {
      return (<div>Loading...</div>);
    }
    return (
      <container>
        <div>
          <h5> {this.state.title} </h5>
          <h5> {this.state.value} </h5>
          <form onSubmit={ this.handleSubmit }>
          <ul>
            { this.state.blanks.map(((blank, index) => 
              <li key={index}>{blank}
                <input 
                  name= { index }
                  type="word"
                  value={ this.state.answers[ index ] } 
                  onChange={ this.handleChange } />
              </li> 
            ))}
          </ul>
          <input 
            type="submit" 
            value="Submit" 
            className="button-symptom-submit" 
          />

          </form>
        </div>
      </container>
    )
  }
}

export default MadlibzForm;