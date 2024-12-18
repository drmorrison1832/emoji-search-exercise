const Search = (props) => {
  const setKeywords = props.setKeywords;
  const keywords = props.keywords;

  return (
    <header>
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
          console.log(value);
        }}
      />
    </header>
  );
};

export default Search;
