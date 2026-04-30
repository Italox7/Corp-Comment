import { useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";

type FeedbackFormProps = {
  onAddToList: (text: string) => void;
};

export default function FeedbackForm({ onAddToList }: FeedbackFormProps) {
  const [feedbackText, setFeedbackText] = useState("");
  const charCount = MAX_CHARACTERS - feedbackText.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedbackText(event.target.value);
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddToList(feedbackText);
    setFeedbackText("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <textarea
        id="feedback-textarea"
        placeholder="text"
        spellCheck={false}
        value={feedbackText}
        onChange={handleChange}
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
