import { useState } from "react"
import style from "./Square.module.css";

export default function Square() {


    const [mark, setMark] = useState("");

    function clickToSetMark() {
        setMark("O");
    }

    return <div className={style.square} onClick={clickToSetMark} >
        {mark}
    </div>
}