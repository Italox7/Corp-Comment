import { TriangleUpIcon } from "@radix-ui/react-icons";
import type { TFeedbackItem } from "../../lib/types";
import { useState } from "react";

type FeedbackItemsProps = { feedbackItem: TFeedbackItem };

export default function FeedabackItem({ feedbackItem }: FeedbackItemsProps) {
  const [open, setOpen] = useState(false);
  const [countVote, setCountVote] = useState(feedbackItem.upvoteCount);

  const handleUpvote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCountVote((prev) => ++prev);
    e.currentTarget.disabled = true;
    e.stopPropagation();
  };

  return (
    <li
      onClick={() => setOpen((prev) => !prev)}
      className={`feedback ${open ? "feedback--expand" : ""}`}
    >
      <button onClick={handleUpvote}>
        <TriangleUpIcon />
        <span>{countVote}</span>
      </button>

      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>

      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>

      <p>{feedbackItem.daysAgo === 0 ? "NEW" : `${feedbackItem.daysAgo}d`}</p>
    </li>
  );
}
