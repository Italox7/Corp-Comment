import FeedabackItem from "./FeedabackItem";

const feedbackItems = [
  {
    upvoteCount: 530,
    badgeLetter: "I",
    companyName: "Italo",
    text: "bla bla bla",
    daysAgo: 4,
  },
  {
    upvoteCount: 850,
    badgeLetter: "E",
    companyName: "Erika",
    text: "Linda e perfeita",
    daysAgo: 7,
  },
  {
    upvoteCount: 154,
    badgeLetter: "U",
    companyName: "Uiui",
    text: "bla bla bla",
    daysAgo: 2,
  },
];

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => (
        <FeedabackItem feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
