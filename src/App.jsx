import { useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import Line from "./components/Line";
import Search from "./components/Search";
import emojis from "./assets/emojiList_mar8cs.json";

function App() {
  // const [clipboard, setClipboard] = useState("");
  const [keywords, setKeywords] = useState("face");

  const reg = new RegExp(keywords);

  return (
    <>
      <Search keywords={keywords} setKeywords={setKeywords} search={keywords} />

      {emojis.map((emoji, index) => {
        const searchMatch = emoji.keywords.match(reg);
        return (
          searchMatch && (
            <Line
              key={index}
              emoji={emoji}
              // clipboard={clipboard}
              // setClipboard={setClipboard}
            />
          )
        );
      })}

      <Footer />
    </>
  );
}

export default App;
