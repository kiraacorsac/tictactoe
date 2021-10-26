import { useState } from "react"
import style from "./Square.module.css";

export default function Square(props) {


    const [mark, setMark] = useState("");



    return <div className={style.singleSquare} onClick={props.onClick}>
        {props.board[props.id]}
    </div >
}