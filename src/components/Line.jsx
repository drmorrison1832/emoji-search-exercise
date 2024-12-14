const Line = (props) => {
  // const clipboard = props.clipboard;
  // const setClipboard = props.setClipboard;

  return (
    <div
      onClick={() => {
        // setClipboard(props.emoji.symbol);
        navigator.clipboard.writeText(props.emoji.symbol);
        // console.log(clipboard);
      }}
    >
      <p>
        {props.emoji.title} - {props.emoji.symbol}
      </p>
      <p style={{ color: "grey" }}>{props.emoji.keywords}</p>
    </div>
  );
};

export default Line;
