import React from 'react';
import ToDoCard from './Card';
import Todo from './Store';
function App() {
  const app = Todo.map((item, index) =>
    <ToDoCard
        key = {index}
        id = {index + 1}
        text = {item.text}
    />
  )
  return (
    <div>
      <div>
        <h1>Todo List Part 2!</h1>
        {app}
      </div>
    </div>
  );
}

export default App;
