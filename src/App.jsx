import { useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import Line from "./components/Line";
import Search from "./components/Search";
import emojis from "./assets/emojiList_mar8cs.json";

function App() {
  const [keywords, setKeywords] = useState("sun glasses");
  const arrayFromKeywords = keywords.split(" ");

  const cleanArray = arrayFromKeywords.filter((string, index) => {
    // Je retourn seulmenet les mots dans leur première occurrence, càd pas de répétitions.
    return string && arrayFromKeywords.indexOf(string) === index;
  });

  // Construction d'une RegExp maître
  const mappedSearchArray = cleanArray.map((word) => {
    return "(" + word + ")";
  });
  const searchString = mappedSearchArray.join("|");
  const reg = new RegExp(`(${searchString})`, "i");

  /* console.log("keywords :", keywords);
  console.log("keywords.split : ", keywords.split(" "));
  console.log("cleanArray :", cleanArray);
  console.log("mappedSearchArray :", mappedSearchArray);
  console.log("searchString :", searchString); */

  return (
    <>
      <Search keywords={keywords} setKeywords={setKeywords} search={keywords} />
      <section className="main">
        {emojis.map((emoji, index) => {
          return (
            (!cleanArray
              .map((word) => {
                const reg3 = new RegExp(word, "gi");
                return reg3.test(emoji.keywords);
              })
              .includes(false) ||
              reg.test(emoji.symbol)) && (
              <Line key={index} index={index} emoji={emoji} />
            )
          );
        })}
      </section>
      <Footer />
    </>
  );
}

export default App;
