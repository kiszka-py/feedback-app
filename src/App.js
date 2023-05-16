import { useState } from "react";
import Header from "./components/Header";
import "./styles.css";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}
