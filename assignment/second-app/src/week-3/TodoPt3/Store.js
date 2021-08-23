import { v4 as uuidv4 } from 'uuid';
const Todo = [
    { id: uuidv4(), text: 'Go Groccery Shopping', isCompleted: false},
    { id: uuidv4(), text: 'Read a Book', isCompleted: false},
    { id: uuidv4(), text: 'Do Laundry', isCompleted: false},
    { id: uuidv4(), text: 'Clean the Car', isCompleted: false}
];
export default Todo;