import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Madlibz from './utils';

export default class MadlibzForm extends Component {
    constructor() {
      super();
      this.state = {
        templates: [],
        title: '',
        blanks: [],
        inputFields: [], // do i need this?
      };
    }

    componentDidMount() {
      // console.log ('mounted');
      Madlibz.getRandomMadlibTemplate().then(result => {
        const templates = result.data
        this.setState({ title: templates.title })
        this.setState({ blanks: templates.blanks })
        console.log ( this.state.title )   
        console.log ( templates )
        console.log ( templates.blanks )
        console.log ( this.state.blanks )
        console.log ( templates.blanks.length )
      });
    }
  
    render() {

      return (
        <container>
          <div>
            <h5> {this.state.title} </h5>
            <form>
              <div>
                  <ul>
                    { this.state.blanks.map(((blank, index) => 
                      <li key={index}>{blank}
                        <input type="name" />
                      </li>
                    ))}
                  </ul>
                  <Link to="/story">
                <button> Submit </button>
                </Link>  
              </div> 
            </form>
          </div>
        </container>
      )
    }
  }