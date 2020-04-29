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
        isLoading: true,
      };
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (event) => {
      event.preventDefault();
      // this.props.history.push(`/story/${ title }`);
    }

    handleClick = (event) => {
        event.preventDefault();
    }

    componentDidMount() {
      console.log ('mounted');
      Madlibz.getRandomMadlibTemplate().then(result => {
        console.log( result.data )

        // Storing state directly into the object this.state does not trigger a re-renderd
        // Calling the function this.setState() does trigger a render

        // Lifecycle (Mounting)
        // 1. Initialise with Constructor
        // 2. getDervivedStateFromProps
        // 3. render() // Draw the UI with the current state inside the component as was defined by (1) and (2). I.e. no API data
        // 4. componentDidMount() // Get any API data, populate the this.state object, call the this.setState once to trigger a re-render.


        // Setting the current stage to the rendered JSON data from AJAX call
        this.state.templates = result.data;

        // Ready to show the user. Re render please.
        this.setState({ isLoading: false });
      }); 
    }
  
    render() {
      return (
        <container>
          <div>
            <h5> Choose your Madlibz stories </h5>
            <form onSubmit={ this.handleSubmit }>
              <div>  
                { this.state.isLoading ? 
                <div>I am getting there...don't hurry me....</div>
                :
                this.state.templates.map(template => {
                  return <Link key={template.id} to={
                            { pathname: `form/${template.id}`,
                            state: { blanks: this.state.templates.blanks }
                            }}>
                          <img src={template.image} />    
                          <p>{template.title}</p>
                          </Link>
                    }
                )}
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