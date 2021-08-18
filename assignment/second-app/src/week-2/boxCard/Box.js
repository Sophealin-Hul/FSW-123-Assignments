import React from 'react';

function Box(props) {
  return (
    <div className = 'card' style = {{backgroundColor: props.bgcolor, width: "250px"}}>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <hr></hr>
        <h3>{props.description}</h3>
    </div>
  );
};

export default Box;

