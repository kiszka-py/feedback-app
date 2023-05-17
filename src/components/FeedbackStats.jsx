import React from "react";

function FeedbackStats({ feedback }) {
  // Calculate average
  if (!feedback || feedback.length === 0) return;
  const average = (
    feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length
  )
    .toFixed(1)
    .replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} reviews</h4>
      <h4>Average rating: {average}</h4>
    </div>
  );
}

export default FeedbackStats;
