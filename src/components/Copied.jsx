const Copied = (props) => {
  const { copyIndex, setCopyIndex } = props;

  return (
    <div className="emoji-copied">
      <div>{copyIndex}</div>
    </div>
  );
};

export default Copied;
