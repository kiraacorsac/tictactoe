import Square from "./Square";
import style from "./GameBoard.module.css";
import { useState } from "react";

export default function GameBoard() {

    const [boardState, setBoardState] = useState(["", "", "", "", "", "", "", "", ""]);
    const [player, setPlayer] = useState("X");
    const [broadcast, setBroadcast] = useState("X Starts:");
    const [replay, setReplay] = useState("");
    const [nextPlayer, setNextPlayer] = useState("O");
    const [gameOver, setGameOver] = useState(0);


    function reloadPage() {
        setReplay(<button className={style.button} onClick={() => window.location.reload()}>Play Again ?</button>);
        return replay;

    }

    function createBroadcast(message, alert = "") {
        let newMessage = (message + " " + alert)
        setBroadcast(newMessage);
        return broadcast;
    }

    function switchMark() {
        setNextPlayer(player);
        if (player == "X") {
            setPlayer("O");
        } else { setPlayer("X") }
        let message = (nextPlayer + "  is next:");
        createBroadcast(message)
        return player;
    }

    function findaWinner(newBoardState) {

        var cellTest = { 0: [1, 3, 4], 1: [3], 2: [2, 3], 3: [1], 6: [1] };
        let signs = ["X", "O"]

        // console.log(cellTest, cellTest[6], cellTest["6"], Object.keys(cellTest))


        for (let position in cellTest) {

            console.log("Position", position);
            // console.log("IS it showing ?", Object.keys(position), cellTest[position], newBoardState[position]);
            console.log("IS it showing ?", cellTest[position]);

            const cellList = cellTest[position]
            console.log(cellList)

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
                        let message = ("Player " + signs[sign] + " Wins!")
                        createBroadcast(message);
                        console.log("Winner streak:", signs[sign], newBoardState[pos1], newBoardState[pos2], newBoardState[pos3]);
                        setGameOver(1);
                        reloadPage();
                    } else { console.log("no winner yet", signs[sign], newBoardState[pos1], newBoardState[pos2], newBoardState[pos3]) };
                }
            }
        }
    }

    function plateFull(newBoardState) {

        if (newBoardState.includes("")) {
            console.log("There is still some room.")

        } else {
            let message = ("Game Over, No Winner.")
            createBroadcast(message);
            console.log("Game Over, No Winner.");
            setGameOver(1);
            reloadPage();
        }

    }

    function clickToSetMark(id) {
        const newBoardState = boardState.slice();
        console.log(id, newBoardState[id]);

        if (gameOver == 0) {
            if (newBoardState[id] == "") {
                newBoardState[id] = switchMark();
                setBoardState(newBoardState);
                console.log(id, newBoardState, newBoardState[id]);
                plateFull(newBoardState);
                findaWinner(newBoardState);
            } else {

                createBroadcast(player + ", choose a freecell.")
            }
        } else {
            createBroadcast("It's Game Over !")
        }
    }
    return <div className={style.box}>
        <div className={style.message}>{broadcast}</div>

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
        <div className={style.replay}>{replay}</div>
    </div>
}