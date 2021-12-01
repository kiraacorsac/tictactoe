

export default function BoardHistory(props) {
    console.log(props.boardHistory)

    function generateBoardStateRepresentation(boardState, turn) {
        //move order, whose turn it is, on click -> see the state

        let player = "O";
        if (turn % 2 == 0) {
            player = "X";
        }

        return <div className={props.className}><li key={turn}><a
            onMouseOver={() => props.previewHistory(turn)}
            onMouseOut={() => props.previewHistory(null)}
            onClick={() => props.goBackInTime(turn)}
        >{turn}. (Player {player})</a></li></div>
    }

    const historyRepresentation = [];
    let turn = 0;
    for (let boardState of props.boardHistory) {
        turn++;
        let boardStateRepresentation = generateBoardStateRepresentation(boardState, turn)
        historyRepresentation.push(boardStateRepresentation);
    }

    console.log(historyRepresentation.reverse());

    return <ul className={props.className}>
        {historyRepresentation}
    </ul>
}