import { useState } from "react";
import Header from "./components/Header";
import "./styles.css";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  function deleteFeedback(id) {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }
  return (
    <>
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
