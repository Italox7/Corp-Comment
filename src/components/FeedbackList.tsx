import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>777</span>
        </button>

        <div>
          <p>I</p>
        </div>

        <div>
          <p>Italo</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sunt
            nostrum, architecto obcaecati aspernatur fuga!
          </p>
        </div>

        <p>7d</p>
      </li>
    </ol>
  );
}
