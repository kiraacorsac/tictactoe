import GameBoard from "./GameBoard";
import BoardHistory from "./BoardHistory";
import { useState } from "react";
import style from "./Game.module.css";



export default function Game() {

    const [boardHistory, setBoardHistory] = useState([
        // [
        //     [
        //         "", "", "", //
        //         "", "", "", //
        //         "", "", ""
        //     ],
        //     [
        //         "", "X", "", //
        //         "", "", "", //
        //         "", "", ""
        //     ],
        //     [
        //         "", "X", "", //
        //         "", "O", "", //
        //         "", "", ""
        //     ]
        // ]
        [
            "", "", "", //
            "", "", "", //
            "", "", ""
        ]
    ])

    function currentBoardState() {
        return boardHistory[boardHistory.length - 1];
    }

    const [playerState, setPlayerState] = useState("");

    const [previewedTurn, setPreviewedTurn] = useState(null);

    const [message, setMessage] = useState("");

    const [gameOver, setGameOver] = useState(false);

    function switchPlayer() {
        if (playerState == "player1") {
            setPlayerState("player2");
        } else {
            setPlayerState("player1");
        }
    }

    function currentPlayerRepresentation() {
        if (playerState == "player1") {
            return "X";
        } else {
            return "O";
        }
    }

    function previewHistory(turnNumber) {
        console.log(`Previewing ${turnNumber}`)

        if (turnNumber == null) {
            setPreviewedTurn(turnNumber)
        } else {
            setPreviewedTurn(boardHistory[turnNumber - 1]);
            console.log(`Previewing ${turnNumber}`)

            // return previewedTurn
        }
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
                        setMessage(message);
                        console.log("Winner streak:", signs[sign], newBoardState[pos1], newBoardState[pos2], newBoardState[pos3]);
                        setGameOver(true);
                        // reloadPage();
                        return;
                    } else {
                        let val = isDraw(newBoardState);
                        console.log("isDraw:", val);
                        if (val) {
                            setMessage("Draw!")
                        }
                        console.log("no winner yet", signs[sign], newBoardState[pos1], newBoardState[pos2], newBoardState[pos3])
                    };
                }
            }
        }
    }

    function isDraw(newBoardState) {
        for (let square of newBoardState) {
            console.log("current state", newBoardState)
            if (square == "") {
                return false;
            }
        }
        return true;
    }

    function clickToSetMark(id) {
        if (gameOver) {
            return;
        }

        if (currentBoardState()[id] == "") {
            switchPlayer();

            let newBoardState = currentBoardState().slice();
            if (playerState == "player1") {
                newBoardState[id] = "X";
            } else {
                newBoardState[id] = "O";
            }

            let newBoardHistory = boardHistory.slice();
            newBoardHistory.push(newBoardState);
            setBoardHistory(newBoardHistory);
            findaWinner(newBoardState);
        } else {
            console.error("Attempt to play on occupied square (id:", id, "current value:", currentBoardState()[id], ")")
        }
    }
    function renderPreviewGameBoard() {
        //return gameboard if previewedState is null
        if (previewedTurn == null) {
            return "";
        } else {
            return <GameBoard boardState={previewedTurn} clickToSetMark={() => null} />
        }
    }

    function resetGame() {
        setBoardHistory([["", "", "", "", "", "", "", "", ""]]);
        setPlayerState("");
        setPreviewedTurn(null);
        setMessage("");
        setGameOver(false);

    }

    return <>
        <div className={style.turn}>Player {currentPlayerRepresentation()}, it is your turn!</div>
        <GameBoard boardState={currentBoardState()} clickToSetMark={clickToSetMark} />
        <BoardHistory boardHistory={boardHistory} previewHistory={previewHistory}></BoardHistory>
        {renderPreviewGameBoard()}
        <div className={style.message}>{message}</div>
        <input type="button" value="reset" onClick={() => resetGame()}></input>
    </>
}