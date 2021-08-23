import React from 'react';
import Dice from './Dice';
import './DiceStyle.css';

class RollDice extends React.Component {
    constructor() {
        super() 
        this.state = {
            dieOne: 5,
            diceTwo: 5
        };
        this.randomRoll = this.randomRoll.bind(this);
    };

    randomRoll() {
        let one = [this.state.dieOne];
        let two = [this.state.diceTwo];
        one = Math.ceil(Math.random() * 6);
        two = Math.ceil(Math.random() * 6);
        this.setState(prevState => {
            return {
                dieOne: one,
                diceTwo: two
            };
        });
    };
    render() {
        return (
            <div className = 'DiceRoll'>
                <Dice pips = {this.state.dieOne} id = '1'/>
                <Dice pips = {this.state.diceTwo} id = '2'/>
                <div>
                    <button onClick = {this.randomRoll} className = 'DiceBtn'> Roll! </button>
                </div>
            </div>
        );
    };
};
export default RollDice;
