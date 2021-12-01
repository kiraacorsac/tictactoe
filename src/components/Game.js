import GameBoard from "./GameBoard";
import BoardHistory from "./BoardHistory";
import WinHistory from "./WinHistory";
import { useState } from "react";
import style from "./Game.module.css";


// TODO list:
// history of who won/lose
// travel in time on click in history


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

    const [winnerList, setWinnerList] = useState([])

    const [playerState, setPlayerState] = useState("");

    const [previewedTurn, setPreviewedTurn] = useState(null);

    const [message, setMessage] = useState("");

    const [gameOver, setGameOver] = useState(false);

    function resetGame() {
        console.log("Resetting...")
        setBoardHistory(
            [[
                "", "", "", //
                "", "", "", //
                "", "", ""
            ]]
        );
        setPlayerState("");
        setPreviewedTurn(null);
        setMessage("");
        setGameOver(false);


    }


    function currentBoardState() {
        return boardHistory[boardHistory.length - 1];
    }

    function switchPlayer() {
        if (playerState == "player1") {
            setPlayerState("player2");
        } else {
            setPlayerState("player1");
        }
    }

    function goBackInTime(turnNumber) {
        console.log(turnNumber)
    }

    function currentMessage() {
        if (message == "") {
            if (playerState == "player1") {
                return "It's X's turn";
            } else {
                return "It's O's turn";
            }

        } else { return message };
    }

    function previewHistory(turnNumber) {
        if (turnNumber != null) {
            console.log(`Previewing ${turnNumber}`)
            setPreviewedTurn(boardHistory[turnNumber - 1]);
        } else {
            setPreviewedTurn(null);
        }


        // return previewedTurn
    }

    function appendToWinnerList(winningPlayer) {
        let newWinnerList = winnerList.slice();
        newWinnerList.push(winningPlayer);
        setWinnerList(newWinnerList);
    }

    function findaWinner(newBoardState) {

        var cellTest = { 0: [1, 3, 4], 1: [3], 2: [2, 3], 3: [1], 6: [1] };
        let signs = ["X", "O"]

        for (let position in cellTest) {
            const cellList = cellTest[position]
            for (let factor of cellList) {
                let pos1 = parseInt(position)
                let pos2 = pos1 + parseInt(factor)
                let pos3 = pos2 + parseInt(factor)
                for (let sign in signs) {

                    if (signs[sign] == newBoardState[pos1] && signs[sign] == newBoardState[pos2] && signs[sign] == newBoardState[pos3]) {
                        let message = ("Player " + signs[sign] + " Wins!")
                        appendToWinnerList(signs[sign]);
                        setMessage(message);
                        setGameOver(true);

                        // reloadPage();
                        return;
                    } else {
                        let val = isDraw(newBoardState);
                        if (val) {
                            setMessage("Draw!")
                            appendToWinnerList("-");
                        }
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

        if (previewedTurn == null) {
            // return empty tag if not previewing state
            return <></>;
        } else {
            // return game board if previewing state
            return <GameBoard boardState={previewedTurn} clickToSetMark={() => null} />
        }
    }

    return <>
        <div className={style.dashboard}>
            <div><WinHistory winHistory={winnerList} ></WinHistory></div>
            <div className={style.turn}>{currentMessage()}</div>
            {/* <div className={style.message}>{message}</div> */}
            <div className={style.board_origin}><GameBoard boardState={currentBoardState()} clickToSetMark={clickToSetMark} /> {renderPreviewGameBoard()}</div>
            {/* <div className={StyleSheet.board_replay}> </div> */}
            <div><BoardHistory className={style.history} boardHistory={boardHistory} previewHistory={previewHistory} goBackInTime={goBackInTime}></BoardHistory></div>

            <div><input type="button" className={style.btn} value="Reset" onClick={() => resetGame()} /></div>
        </div>


    </>
}