import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Madlibz from './utils';

export default class MadlibzForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      templates: [],
      title: '',
      blanks: [],
      blank: '',
      id: '',
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value})
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    const { id } = this.props.match.params;
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
      console.log ( 'story of index 1:', templates[1].value )
    });
  }

  render() {
    if (this.state.blanks === null) {
      return (<div>Loading...</div>);
    }
    return (
      <container>
        <div>
          <h5> {this.state.title} </h5>
          <form onSubmit={ this.handleSubmit }>
          <ul>
            { this.state.blanks.map(((blank, index) => 
              <li key={index}>{blank}
                <input 
                  type="name" 
                  value={ this.state.blank } 
                  onChange={ this.handleChange } />
              </li> 
            ))}
          </ul>
          <input 
            type="submit" 
            value="Submit" 
            className="button-symptom-submit" 
          />
          {/* <Link key={id} to={
            { pathname: `story/${template.id}`,
            value: { value: this.state.templates.value }
            }}>
          <br></br>
          <Button> Display my story </Button>
            </Link>   */}

          </form>
        </div>
      </container>
    )
  }
}