import Square from "./Square";
import style from "./GameBoard.module.css";

export default function GameBoard() {
    return <div>
        <div className={style.row}>
            <Square></Square>
            <Square></Square>
            <Square></Square>
        </div>
        <div className={style.row}>
            <Square></Square>
            <Square></Square>
            <Square></Square>
        </div>
        <div className={style.row}>
            <Square></Square>
            <Square></Square>
            <Square></Square>
        </div>
    </div>
}