import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Madlibz from './utils';

export default class MadlibzForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        templates: [],
        title: '',
        blanks: [],
        blank: '',
        inputFields: [], // do i need this?
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
      console.log ('mounted');
      Madlibz.getRandomMadlibTemplate().then(result => {
        console.log( result.data )
        const templates = result.data
        this.setState({ title: templates.title })
        this.setState({ blanks: templates.blanks })
        console.log ( 'story title of index 1:', templates[1].title )
        console.log ( 'story blanks of index 1:', templates[1].blanks )
        console.log ( 'story blanks length of index 1:', templates[1].blanks.length )
        console.log ( 'story of index 1:', templates[1].value )
        console.log ( 'story title of index 2:', templates[2].title )
        console.log ( 'story blanks of index 2:', templates[2].blanks )
        console.log ( 'story blanks length of index 2:', templates[2].blanks.length )
        console.log ( 'story of index 2:', templates[2].value )
      });
    }
  
    render() {
      return (
        <container>
          <div>
            <h5> {this.state.title} </h5>
            <form onSubmit={ this.handleSubmit }>
              <div>
                  <ul>
                    {/* { this.state.blanks.map(((blank, index) => 
                      <li key={index}>{blank}
                        <input 
                          type="name" 
                          value={ this.state.blank } 
                          onChange={ this.handleChange } />
                      </li> */}
                    ))}
                  </ul>
                          <input 
                            type="submit" 
                            value="Submit" 
                            className="button-symptom-submit" 
                          />
                <Link to="/story"></Link>  
              </div> 
            </form>
          </div>
        </container>
      )
    }
  }