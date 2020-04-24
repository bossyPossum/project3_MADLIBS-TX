import React, { useState } from 'react';

export default () => {
    const [playername, setPlayername] = useState('');
    console.log( ' playername ', playername )
    return (
        <div class="create">
            <h2>Create My Madlibz</h2>
            <form>
                <label>
                    Name:
                    <input type="name" value={ playername } onChange={ (e) => setPlayername( e.target.value ) } />
                </label>
                <button>
                    Create a madlibz { playername }
                </button>
            </form>
        </div>
    );
};