import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Insert logo</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
        <Route exact path="/" component={ Home } />
        <Route exact path="/create" component={ Create } />
        <Route exact path="/select" component={ Select } />
        <Route path="/form" component={ MadlibzForm } />
        <Route path="/story/:id" component={ Story } />
    </div>
  </Router>
);


ReactDOM.render(Routes, document.body);
