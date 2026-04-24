import { useState } from "react";
import { MAX_CHARACTERS } from "../lib/constants";

export default function FeedbackForm() {
  const [feedbackText, setFeedbackText] = useState("");

  const charCount = MAX_CHARACTERS - feedbackText.length;

  return (
    <form className="form">
      <textarea
        id="feedback-textarea"
        placeholder="text"
        spellCheck={false}
        value={feedbackText}
        onChange={(e) => {
          setFeedbackText(e.target.value);
        }}
        maxLength={MAX_CHARACTERS}
      />

      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>

      <div>
        <p className="u-italic">{charCount}</p>
        <button
          onClick={() => {
            console.log("ai meu deus!!");
          }}
        >
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
