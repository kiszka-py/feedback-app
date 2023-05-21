import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = function ({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/feedback?_sort=id&_order=desc`);
      const data = await response.json();

      setFeedback(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  async function addFeedback(newFeedback) {
    console.log(newFeedback);
    const response = await fetch(`/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    console.log(response, data);
    setFeedback([data, ...feedback]);
  }

  async function deleteFeedback(id) {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  async function updateFeedback(id, updItem) {
    const response = await fetch(`feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();

    setFeedback(
      feedback.map((item) => {
        if (item.id === id) return { ...item, ...data };
        else return item;
      })
    );
    setFeedbackEdit({
      item: {},
      edit: false,
    });
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
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
