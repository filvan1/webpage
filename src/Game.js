import React from 'react'
import Prism from './components/Prism'
import Particle from './components/Particle';

function Game() {
    return (
        <div className="gameContainer">
            
                <h2>Prism</h2>
                <Prism />
            
                <Particle/>
            
        </div >
    )
}


export default Game;
