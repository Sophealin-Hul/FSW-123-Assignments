import React from 'react';


class Dice extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        let imgDice = './images' + this.props.pips + '.png';
        let imgID = 'img' + this.props.id;
        return (
            <img id = {imgID} style = {{padding: 20}} src = {imgDice} alt = 'dice' />
        );
    };
};
export default Dice;

