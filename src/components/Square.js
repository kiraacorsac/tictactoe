import style from "./Square.module.css";

export default function Square(props) {
    
    return <div className={style.singleSquare} onClick={props.onClick} >
        {props.board[props.id]}
    </div >
}