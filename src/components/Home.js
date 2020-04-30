import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default () => {
    const [playername, setPlayername] = useState('');
    return (
        <container>
            <div className="home">
                <h1 class="box bounce">Let's play MADLIBZ</h1>
                <br></br>
                <div className="whatIsYourName">
                <form>
                    <label>
                        What is your name:
                        <br></br>
                        <input type="name" placeholder="Name" value={ playername } onChange={ (e) => setPlayername( e.target.value ) } />
                    </label>
                    <Link to={{
                        pathname: '/select',
                        state: {
                            name: playername
                        }
                        }}>
                    <br></br>
                    <Button> Play Now </Button>
                    </Link>    
                </form>
                </div>
            </div>
        </container>
    );
};