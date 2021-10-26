import { useState } from "react"
import style from "./Square.module.css";

export default function Square() {


    const [mark, setMark] = useState("");

    function clickToSetMark() {
        setMark("X");
    }

    return <div className={style.singleSquare} onClick={() => clickToSetMark()}>
        {mark}
    </div >
}