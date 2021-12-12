import { findAllByDisplayValue } from '@testing-library/dom';
import { useState } from 'react';
import './App.css';
function App() {

  const [getTodo, setTodo] = useState("")



  var apiKey = "6de9bfb3c9bb1f5bb3f71b73e0e0dc0d"
  var city = "Bratislava"

  function fetchSelectedData() {

    let request = fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey)
      .then((data) => { return data.json() })
      .then((parsedData) => {
        console.log(parsedData);
        setTodo(parsedData)
      })
  }



  function getKeyValuePairs(json_object) {
    let array = (["", ""]);

    for (var value in json_object) {
      let pair = (value + " : " + json_object[value] + "  ");
      console.log("Array", array);
      let newArray = array.slice();
      console.log("New Array", newArray);
      newArray.push(pair);
      array = newArray;
      console.log("Full Chabang", pair, array, newArray)

    }



    return array;
  }

  return (
    <div>

      <input type="button" value="Fetch data!" onClick={fetchSelectedData} />
      <h2 style={{ color: "orange" }}>
        {getTodo.name}
      </h2>
      <h3 style={{ color: "red" }}> <b>Temperature:</b><br></br>
        {getKeyValuePairs(getTodo.main)}
      </h3>
      <h3 style={{ color: "yellow" }}> <b>Wind Speed:</b><br></br>
        {getKeyValuePairs(getTodo.wind)}
      </h3>
    </div >
  );
}

export default App;
