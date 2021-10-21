import Square from "./Square";

export default function GameBoard() {
    return <div>
        <div className="row">
            <Square></Square>
            <Square></Square>
            <Square></Square>
        </div>
        <div className="row">
            <Square></Square>
            <Square></Square>
            <Square></Square>
        </div>
        <div className="row">
            <Square></Square>
            <Square></Square>
            <Square></Square>
        </div>
    </div>
}