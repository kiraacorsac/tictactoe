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

        var cellTest = { 0: [1, 3, 4], 1: 3, 2: [2, 3], 3: 1, 6: 1 };
        let signs = ["X", "O"]

        // console.log(cellTest, cellTest[6], cellTest["6"], Object.keys(cellTest))


        for (let position in cellTest) {

            console.log("Position", position);
            // console.log("IS it showing ?", Object.keys(position), cellTest[position], newBoardState[position]);
            console.log("IS it showing ?", cellTest[position]);

            const cellList = cellTest[position]
            console.log(cellList)
            try {
                for (let factor of cellList) {
                    console.log("I am a factor, part of a list", factor);
                    let pos1 = parseInt(position)
                    let pos2 = pos1 + parseInt(factor)
                    let pos3 = pos2 + parseInt(factor)
                    console.log(pos1, pos2, pos3)
                    for (let sign in signs) {
                        console.log("sign", signs[sign]);


                        console.log(signs[sign], newBoardState[0]);


                        if (signs[sign] == newBoardState[pos1] && signs[sign] == newBoardState[pos2] && signs[sign] == newBoardState[pos3]) {
                            alert("We have a Winner!");
                            console.log("Winner streak:", signs[sign], newBoardState[pos1], newBoardState[pos2], newBoardState[pos3]);
                        } else { console.log("no winner yet", signs[sign], newBoardState[pos1], newBoardState[pos2], newBoardState[pos3]) };
                    }

                }
            } catch {
                console.log("It is not a list", cellList)
                let pos1 = parseInt(position)
                let pos2 = pos1 + parseInt(cellList)
                let pos3 = pos2 + parseInt(cellList)
                console.log(pos1, pos2, pos3)
                for (let sign in signs) {
                    console.log("sign", signs[sign]);


                    console.log(signs[sign], newBoardState[0]);


                    if (signs[sign] == newBoardState[pos1] && signs[sign] == newBoardState[pos2] && signs[sign] == newBoardState[pos3]) {
                        alert("We have a Winner!");
                        console.log("Winner streak:", signs[sign], newBoardState[pos1], newBoardState[pos2], newBoardState[pos3]);
                    } else { console.log("no winner yet", signs[sign], newBoardState[pos1], newBoardState[pos2], newBoardState[pos3]) };
                }
            }
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