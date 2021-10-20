import style from "./Paragraph.module.css"

function helperFunction() {
  console.log("help!")
}

function Paragraph() {
  helperFunction();

  return <p className={style.whiteParagraph}>
    This is a paragraph!

    <input type="button" className={style.button} value="Click me!" />
  </p>
}

export default Paragraph