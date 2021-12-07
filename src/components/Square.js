import style from "./Square.module.css"
export default function Square(props) {
    let historyStyle = {
        backgroundColor: "rgba(213, 12, 213, 0.1",
        border: "2px solid rgba(213, 12, 213, 0.3)",
    }

    let activeStyle = {}
    if (props.previewColor) { activeStyle = historyStyle; }

    return <div style={activeStyle} className={style.singleSquare} onClick={props.onClick} >{props.board[props.id]}</div >
}

