import { useState } from "react";

const Line = (props) => {
  const { copyIndex, setCopyIndex, showEmojiName } = props;

  return (
    <div
      title={props.emoji.keywords}
      className="line"
      onClick={() => {
        navigator.clipboard.writeText(props.emoji.symbol);
        setCopyIndex("Copied");
        setTimeout(() => {
          setCopyIndex("");
        }, 3000);
      }}
    >
      <div className="emoji-symbol">{props.emoji.symbol}</div>
      {showEmojiName === "show" && (
        <div className="emoji-title">{props.emoji.title}</div>
      )}
      <div className="tags">{props.emoji.keywords}</div>
    </div>
  );
};

export default Line;
