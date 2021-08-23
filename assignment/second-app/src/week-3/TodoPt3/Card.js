import './Style3.css'
function ToDoCard(props,Todo, deleteTodo) {
    let id = `checked ${props.id}`;
    return (
        <div>
            <div className = 'text'>
                <input type = 'checkbox'/>
                <label for = {id}>{props.text}</label>

                <button className = "dbtn" onClick = {() => deleteTodo(Todo.id)}>X</button>
            </div>
        </div>
    )
}

export default ToDoCard;
