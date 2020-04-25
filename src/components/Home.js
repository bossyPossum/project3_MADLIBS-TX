import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default () => {
    const [playername, setPlayername] = useState('');
    return (
        <div className="home">
            <h1>Let's play MADLIBZ</h1>

            <form>
                <label>
                    Please enter your name:
                    <br></br>
                    <input type="name" value={ playername } onChange={ (e) => setPlayername( e.target.value ) } />
                </label>
                <Link to="/select">
                <button> Start playing </button>
                </Link>    
            </form>
        </div>
    );
};