import Square from "./Square";
import style from "./GameBoard.module.css";
import { useState } from "react";

export default function GameBoard() {

    const [boardState, setBoardState] = useState(["", "", "", "", "", "", "", "", ""])
    const [player, setPlayer] = useState("X");


    function switchMark() {
        if (player == "X") {
            setPlayer("O");
        } else { setPlayer("X") }

        return player;
    }
    function findaWinner(newBoardState) {

        let patterns = [1, 3, 4];
        let backslash = [2, 4, 6];
        let signs = ["X", "O"]

        for (let sign in signs) {
            console.log("sign", signs[sign]);


            console.log(signs[sign], newBoardState[0]);


            if (signs[sign] == newBoardState[0] && signs[sign] == newBoardState[1] && signs[sign] == newBoardState[2]) {
                alert("We have a Winner!");
                console.log("Winner streak:", signs[sign], newBoardState[0], newBoardState[1], newBoardState[2]);
            } else { console.log("no winner yet", signs[sign], newBoardState[0], newBoardState[1], newBoardState[2]) };
        }





    }

    function clickToSetMark(id) {
        const newBoardState = boardState.slice();
        console.log(id, newBoardState[id]);


        if (newBoardState[id] == "") {
            newBoardState[id] = switchMark();
            setBoardState(newBoardState);
            console.log(id, newBoardState, newBoardState[id]);
            findaWinner(newBoardState);
        } else { alert("You already used that cell. Choose another cell.") }
    }
    return <div className={style.box}>
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