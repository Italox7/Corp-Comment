import FeedabackItem from "./FeedabackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import type { TFeedbackItem } from "../../lib/types";

type FeedbackListProps = {
  isLoading: boolean;
  feedbackItems: TFeedbackItem[];
  errorMessage: string;
};

export default function FeedbackList({
  isLoading,
  feedbackItems,
  errorMessage,
}: FeedbackListProps) {
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}

      {errorMessage && <ErrorMessage message={errorMessage} />}

      {feedbackItems.map((feedbackItem) => (
        <FeedabackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
