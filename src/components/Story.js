/*
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default () => {
    const [playername, setPlayername] = useState('');
    console.log( ' playername ', playername )
    return (
        <div class="select">
            <h2>My Madlibz Story</h2>
            <form>
                <label>
                    Story to display here
                </label>
                <br></br>
                <Link to="/">
                    <button>
                        Start a New Game
                    </button>
                </Link>
            </form>
        </div>
    );
};
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value})
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
      console.log ( 'story of index 1:', templates[2].value[0] ) //displaying tehe first element of this story
      console.log ( 'story of index 2:', templates[2].value[1] )//displaying tehe second element of this story
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

          {/* <ul>
            { this.state.value.map(((value, index) => 
              <li key={index}>{value}
              </li>
            ))}
          </ul> */}
          <input 
            type="submit" 
            value="Submit" 
            className="button-symptom-submit" 
          />
          <Link to="/story/4"></Link> 
          {/* <Link to={{
                pathname: "story/3",
                }}>
                <br></br>
                <Button> Start playing </Button>
        </Link>      */}
        </div>
      </container>
    )
  }
}