import { useState } from "react";
import Header from "./components/Header";
import "./styles.css";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  function deleteFeedback(id) {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  function addFeedback(newFeedback) {
    console.log(newFeedback, "from App");
    setFeedback([, newFeedback, ...feedback]);
  }

  return (
    <>
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackForm handleAddFeedback={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
