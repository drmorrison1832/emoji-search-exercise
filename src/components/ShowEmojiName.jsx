import { useState } from "react";

const ShowEmojiName = (props) => {
  const { showEmojiName, setShowEmojiName } = props;

  return (
    <fieldset>
      <legend>Emoji name:</legend>
      <div className="radios-zone">
        <label htmlFor="show-emoji-name-show">
          show
          <input
            id="show-emoji-name-show"
            type="radio"
            name="show-emoji-name-show"
            value="show"
            checked={showEmojiName === "show"}
            onChange={(event) => {
              setShowEmojiName("show");
            }}
          />
        </label>

        <label htmlFor="show-emoji-name-hide">
          hide
          <input
            id="show-emoji-name-hide"
            type="radio"
            name="show-emoji-name-hide"
            value="hide"
            checked={showEmojiName === "hide"}
            onChange={(event) => {
              setShowEmojiName("hide");
            }}
          />
        </label>
      </div>
    </fieldset>
  );
};

export default ShowEmojiName;
