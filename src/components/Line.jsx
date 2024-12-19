import { useState } from "react";

const Line = (props) => {
  // const [copyIndex, setCopyIndex] = useState(false);
  const { copyIndex, setCopyIndex, showEmojiName } = props;

  return (
    <div
      className="line"
      onClick={() => {
        navigator.clipboard.writeText(props.emoji.symbol);
        setCopyIndex("Copied");
        setTimeout(() => {
          setCopyIndex("");
        }, 3000);
      }}
    >
      <div className="emoji-symbol">
        {/* {props.index} -  */} {props.emoji.symbol}
      </div>
      {/* <div className="emoji-copied">{copyIndex}</div> */}
      {showEmojiName === "show" && (
        <div className="emoji-title">{props.emoji.title}</div>
      )}
      <div className="tags">{props.emoji.keywords}</div>
    </div>
  );
};

export default Line;
