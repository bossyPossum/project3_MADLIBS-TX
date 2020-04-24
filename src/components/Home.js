import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default () => {
    return (
        <div className="home">
            <h1>Let's play MADLIBZ</h1>
            <Link to="/create">
                <button>Create my own Madlibz</button>
            </Link>
        </div>
    );
};