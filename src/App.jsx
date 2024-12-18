import { useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import Line from "./components/Line";
import Search from "./components/Search";
import SearchTypeSelect from "./components/SearchTypeSelect";
import emojis from "./assets/emojiList_mar8cs.json";

function App() {
  const [searchType, setSearchType] = useState("any");

  const [keywords, setKeywords] = useState("");
  // const [keywords, setKeywords] = useState(" sun    glasses   ");
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
  const reg = new RegExp(`(${searchString})`, "gi");

  console.log("keywords :", keywords); // keywords : " sun    glasses  "
  console.log("keywords.split : ", keywords.split(" ")); // keywords.split : ["", "sun", "", "", "", "glasses", "", ""]
  console.log("cleanArray :", cleanArray); // cleanArray : ["sun", "glasses"]
  console.log("mappedSearchArray :", mappedSearchArray); // mappedArray : "(sun), (glasses)"
  console.log("searchString :", searchString); // searchString : "(sun)|(glasses)"

  return (
    <>
      <Search keywords={keywords} setKeywords={setKeywords} search={keywords} />
      <SearchTypeSelect searchType={searchType} setSearchType={setSearchType} />
      <section className="main">
        {emojis.map((emoji, index) => {
          // ADD MATCHES WITH EMOJI NAME !!!
          return searchType === "any"
            ? reg.test(emoji.keywords) && (
                <Line key={index} index={index} emoji={emoji} />
              )
            : !cleanArray
                .map((word) => {
                  const reg3 = new RegExp(word, "gi");
                  return reg3.test(emoji.keywords);
                })
                .includes(false) && (
                <Line key={index} index={index} emoji={emoji} />
              );
        })}
      </section>
      <Footer />
    </>
  );
}

export default App;
