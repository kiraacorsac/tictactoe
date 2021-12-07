import style from "./WinHistory.module.css";


export default function WinHistory(props) {
    function countOccurences(element, array) {
        let count = 0;
        for (let item of array) {
            if (item == element) {
                count++;
            }
        }
        return count;
    }


    function xWon() {
        return countOccurences("X", props.winHistory)
    }

    function oWon() {
        return countOccurences("O", props.winHistory)
    }

    function drawn() {
        return countOccurences("-", props.winHistory)
    }

    return <div className={style.history}>
        Home  {oWon()} : {xWon()}  Visitor <br></br>
        Draw: {drawn()}<br></br><br></br>
    </div>
}