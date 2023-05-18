import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = function ({ children }) {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "Item from context",
      rating: 8,
    },
  ]);

  function addFeedback(newFeedback) {
    console.log(newFeedback, "from Context");
    setFeedback([newFeedback, ...feedback]);
  }

  function deleteFeedback(id) {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
