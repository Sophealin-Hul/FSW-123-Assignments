import React from "react";

function ToDoCard(props) {
    let id = `checked ${props.id}`;
    return (
        <div>
            <div>
                <input type = 'checkbox'/>
                <label for = {id}>{props.text}</label>

            </div>
        </div>
    )
}

export default ToDoCard;
