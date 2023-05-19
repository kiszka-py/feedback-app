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
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  function addFeedback(newFeedback) {
    console.log(newFeedback, "from Context");
    setFeedback([newFeedback, ...feedback]);
  }

  function deleteFeedback(id) {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  function editFeedback(item) {
    setFeedbackEdit({
      item,
      edit: true,
    });
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
