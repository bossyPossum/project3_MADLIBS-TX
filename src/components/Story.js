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