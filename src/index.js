import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, Form, Button, FormControl, Container } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Create from './components/Create';
import Select from './components/Select';
import MadlibzForm from './components/Form';
import Story from './components/Story';

// Not a function: Routes
const Routes = (
  <Router>
    <div>
      <Navbar bg="primary" variant="dark" className="navigation">
        <Container>
        <Navbar.Brand href="/">
        <img src="https://studio.code.org/v3/assets/S_o3osNVrredr-YE_cradNUtdNO6K-N57DLYDgbA-4o/boy2.png" height="60" width="60" alt="text here" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        </Container>
      </Navbar>
      <Container>
        <Route exact path="/" component={ Home } />
        <Route exact path="/create" component={ Create } />
        <Route exact path="/select" component={ Select } />
        <Route path="/form/:id" component={ MadlibzForm } />
        <Route path="/story/:id" component={ Story } />
      </Container>  
    </div>
  </Router>
);


ReactDOM.render(Routes, document.body);
