import { useState } from "react";

const Line = (props) => {
  const [copyIndex, setCopyIndex] = useState(false);

  return (
    <div
      className="line"
      onClick={() => {
        // setClipboard(props.emoji.symbol);
        navigator.clipboard.writeText(props.emoji.symbol);
        setCopyIndex("Copied!");

        // console.log(clipboard);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setCopyIndex("");
        }, 1000);
      }}
    >
      <div className="emoji-symbol">
        {/* {props.index} -  */} {props.emoji.symbol}
      </div>
      <div className="emoji-title">{props.emoji.title}</div>
      <div className="emoji-copied">{copyIndex}</div>
      {/* <p style={{ color: "grey" }}>{props.emoji.keywords}</p> */}
    </div>
  );
};

export default Line;
