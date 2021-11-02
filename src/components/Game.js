import GameBoard from "./GameBoard";
import { useState } from "react";

export default function Game() {
    // const [boardState, setBoardState] = useState(
    //     [
    //         "", "", "", //
    //         "", "", "", //
    //         "", "", ""
    //     ]
    // )

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
        //     ]
            
        // ]
        [
            "", "", "", //
            "", "", "", //
            "", "", ""
        ]
    ])



    function currentBoardState(){
        return boardHistory.at(-1);
    }
    
    const [playerState, setPlayerState] = useState("");

    function switchPlayer() {
        if (playerState == "player1") {
            setPlayerState("player2");
        } else {
            setPlayerState("player1");
        }
    }

    function clickToSetMark(id) {

        if (currentBoardState()[id] == "") {
            switchPlayer();

            let newBoardState = currentBoardState().slice();
            if (playerState == "player1") {
                newBoardState[id] = "X";
            } else {
                newBoardState[id] = "O";
            }
            setBoardState(newBoardState);
        } else {
            console.error("Attempt to play on occupied square (id:", id, "current value:", currentBoardState()[id], ")")
        }

    }


    return <GameBoard boardState={currentBoardState()} clickToSetMark={clickToSetMark} />
}