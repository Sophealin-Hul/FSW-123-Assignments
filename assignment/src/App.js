import './App.css';

function App() {
  return (
    <>
    <h1>To-do List</h1>
    <div>
        <input type = "checkbox" name = "shopping" value = "grocery"/>
        <label for = "shopping"> Go Grocery Shopping </label>
        <br></br>
        <input type = "checkbox" name = "reading" value = "book"/>
        <label for = "reading"> Read a Book </label>
        <br></br>
        <input type = "checkbox" name = "laundry" value = "clothes"/>
        <label for = "laundry"> Do the Laundry </label>
        <br></br>
        <input type = "checkbox" name = "cleaning" value = "car"/>
        <label for = "cleaning"> Clean the Car </label>
    </div>
    </>
  );
}

export default App;
