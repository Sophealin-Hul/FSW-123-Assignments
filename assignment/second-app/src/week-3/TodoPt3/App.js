import React from 'react';
import ToDoCard from './Card';
import Todo from './Store';
import './Style3.css';
class App extends React.Component {
  constructor() {
    super()
    this.state = {
        myTodo: Todo.map((item, index) => 
          ({
            key: index,
            id: item.id,
            text: item.text,
            isCompleted: item.isCompleted
          })
      )
    }
  }
  completeTask = (e) => {
    if (e) {
      let myUpdatedTodo = [...this.state.myTodo];
      let index = myUpdatedTodo.findIndex(item => item.id === e);
      let updatedTodo = {...myUpdatedTodo[index]};
      if(updatedTodo.isCompleted) {
          updatedTodo.isCompleted = false;
      }else {
          updatedTodo.isCompleted = true;
      }
      myUpdatedTodo[index] = updatedTodo;
      this.setState({
        myTodo: myUpdatedTodo
      });
    }
  }
  deleteTodo = (e) => {
    if (e) {
      let myDeleteTodo = [...this.state.myTodo];
      let index = myDeleteTodo.findIndex(item => item.id === e);
      myDeleteTodo.splice(index, 1);
      this.setState ({
        myTodo: myDeleteTodo
      });
    }
  }
  render() {
    const card = this.state.myTodo.map((item, index) => {
      return (
        <ToDoCard
          key = {item.key}
          id = {item.id}
          text = {item.text}
          isCompleted = {item.isCompleted}
          completeTask = {this.completeTask}
          deleteTodo = {this.deleteTodo}
        />
      )
    })
    return (
      <div>
        <div className = "todoHeader">Todo List Part 3!</div>
        {card}
      </div>
    )
  }
}
export default App;
