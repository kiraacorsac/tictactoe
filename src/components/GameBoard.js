import Square from "./Square";
import style from "./GameBoard.module.css";
import { useState } from "react";

export default function GameBoard() {
    const [boardState, setBoardState] = useState(
        [
            "", "", "", //
            "", "", "", //
            "", "", ""
        ]
    )

    function clickToSetMark(id){
        const newBoardState = boardState.slice();
        newBoardState[id] = "X";
        setBoardState(newBoardState)
    }

    return <div>
        <div className={style.row}>
            <Square id="0" board={boardState} onClick={() => clickToSetMark(0)}></Square>
            <Square id="1" board={boardState} onClick={() => clickToSetMark(1)}></Square>
            <Square id="2" board={boardState} onClick={() => clickToSetMark(2)}></Square>
        </div>
        <div className={style.row}>
            <Square id="3" board={boardState} onClick={() => clickToSetMark(3)}></Square>
            <Square id="4" board={boardState} onClick={() => clickToSetMark(4)}></Square>
            <Square id="5" board={boardState} onClick={() => clickToSetMark(5)}></Square>
        </div>
        <div className={style.row}>
            <Square id="6" board={boardState} onClick={() => clickToSetMark(6)}></Square>
            <Square id="7" board={boardState} onClick={() => clickToSetMark(7)}></Square>
            <Square id="8" board={boardState} onClick={() => clickToSetMark(8)}></Square>
        </div>
    </div>
}