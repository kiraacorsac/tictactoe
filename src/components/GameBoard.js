import Square from "./Square";
import style from "./GameBoard.module.css";

export default function GameBoard(props) {

    return <div>
        <div className={style.row}>
            <Square id="0" board={props.boardState} onClick={() => props.clickToSetMark(0)}></Square>
            <Square id="1" board={props.boardState} onClick={() => props.clickToSetMark(1)}></Square>
            <Square id="2" board={props.boardState} onClick={() => props.clickToSetMark(2)}></Square>
        </div>
        <div className={style.row}>
            <Square id="3" board={props.boardState} onClick={() => props.clickToSetMark(3)}></Square>
            <Square id="4" board={props.boardState} onClick={() => props.clickToSetMark(4)}></Square>
            <Square id="5" board={props.boardState} onClick={() => props.clickToSetMark(5)}></Square>
        </div>
        <div className={style.row}>
            <Square id="6" board={props.boardState} onClick={() => props.clickToSetMark(6)}></Square>
            <Square id="7" board={props.boardState} onClick={() => props.clickToSetMark(7)}></Square>
            <Square id="8" board={props.boardState} onClick={() => props.clickToSetMark(8)}></Square>
        </div>
    </div>
}