import Game from "./Game";

export default function BoardHistory(props) {
    console.log(props.boardHistory)

    function generateBoardStateRepresentation(boardState, turn) {
        //move order, whose turn it is, on click -> see the state

        let player = "O";
        if (turn % 2 == 0) {
            player = "X";
        }

        return <li key={turn}><a onClick={() => props.previewHistory(turn)}>{turn}. (Player {player})</a></li>
    }

    const historyRepresentation = [];
    let turn = 0;
    for (let boardState of props.boardHistory) {
        turn++;
        let boardStateRepresentation = generateBoardStateRepresentation(boardState, turn)
        historyRepresentation.push(boardStateRepresentation);
    }

    console.log(historyRepresentation.reverse());

    return <ul>
        {historyRepresentation}
    </ul>
}