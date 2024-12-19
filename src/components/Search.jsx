const Search = (props) => {
  const { keywords, setKeywords, copyIndex, setCopyIndex } = props;

  return (
    <section>
      <div>😎 Emoji Search 😎</div>
      <input
        className="search-box"
        placeholder="Letters and numbers only..."
        type="search"
        name="search"
        value={keywords}
        onChange={(event) => {
          const value = event.target.value;
          setKeywords(value);
          // console.log(value);
        }}
      />
      {/* <div className="emoji-copied">{copyIndex}</div> */}
    </section>
  );
};

export default Search;
