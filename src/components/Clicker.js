import { useState } from "react"
import Paragraph from "./Paragraph";

export default function Clicker() {


  const [buttonClickedTimes, setButtonClickedTimes] = useState(0);
  const [userInput, setUserInput] = useState("default");


  function clickHandler() {
    console.log("Button clicked!")

    setButtonClickedTimes(buttonClickedTimes + 1);
  }

  function textChangeHandler(newTextEvent) {
    let newText = newTextEvent.target.value;
    console.log(newText)

    setUserInput(newText)

  }

  return <>
    <Paragraph></Paragraph>

    <div>
      <span>{buttonClickedTimes}</span>
      <input type="button" value="Click me!" onClick={clickHandler} />
    </div>
    <div>
      <span>{userInput}</span>
      <input type="text" onChange={textChangeHandler} />
    </div>
  </>
}