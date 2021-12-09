import { useState } from 'react';
import './App.css';
function App() {

  const [getTodo, setTodo] = useState("")
  const [getNumber, setNumber] = useState(0)

  function fetchSelectedData() {
    let request = fetch("https://jsonplaceholder.typicode.com/todos/" + getNumber)
      .then((data) => { return data.json() })
      .then((parsedData) => {
        console.log(parsedData);
        setTodo(parsedData)
      })
  }

  function fetchData() {
    // console.log("Fetching...")
    // let request = fetch("https://jsonplaceholder.typicode.com/todos/15"); // pending, fullfiled, rejected

    // request.then((data) => { // occures when fullfiled
    //   return data.json();
    // }).then((parsedData) => {
    //   console.log(parsedData);
    //   setTodo(parsedData);
    // })

    // request.catch((err) => {
    //   console.error("Promise failed!")
    //   console.error(err);
    // })

    console.log("Fetching end...")
  }

  function handleNumberChange(e) {
    const parsedNumber = Number(e.target.value);
    setNumber(parsedNumber)
  }

  return (
    <div>
      <input type="number" onChange={handleNumberChange} />
      <input type="button" value="Fetch data!" onClick={fetchSelectedData} />
      <h2 style={{ color: "white" }}>
        {getTodo.title}
      </h2>
    </div >
  );
}

export default App;
