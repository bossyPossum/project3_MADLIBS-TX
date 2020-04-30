import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
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
      const sentence = <span> { this.state.value[i]}  <span class="box bounce">{ this.state.answers[i] }</span> </span>;
      newSentence.push(sentence);
    }
    console.log( newSentence )

    this.props.history.push({
      pathname: `/story/${ id }`,
      state: {
      "newSentence": newSentence
      }
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    Madlibz.getRandomMadlibTemplate().then(result => {
      const templates = result.data
      // refactor this to avoid re-rendering 4 times
      this.setState({ title: templates[ id -1 ].title })
      this.setState({ blanks: templates[ id - 1 ].blanks })
      this.setState({ value: templates[ id - 1 ].value })
      this.setState({ answers: Array(this.state.blanks.length).fill('')}) //grab the length of the blank state // TODO look up whats Array in MDN.
    });
  }

  render() {
    const { id } = this.props.match.params;
    if (this.state.blanks === null) {
      return (<div>Loading...</div>);
    }
    return (
      <Container>
        <div>
          <h2> {this.state.title} </h2>
          <form onSubmit={ this.handleSubmit }>
          <ul>
            { this.state.blanks.map(((blank, index) => 
              <li key={index}>
                <label>{blank}</label>
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
      </Container>
    )
  }
}

export default MadlibzForm;