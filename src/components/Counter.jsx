import React, { useState } from 'react';

export default function Counter() {
  const [data, setData] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    return Object.values(data).reduce((total, values) => total + values, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return Math.round((data.good / totalFeedback) * 100);
  };

  const handleClick = type => {
    setData(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  return (
    <div>
      <div>
        <button onClick={() => handleClick('good')}>Good</button>
        <button onClick={() => handleClick('neutral')}>Neutral</button>
        <button onClick={() => handleClick('bad')}>Bad</button>
      </div>
      <p>Good: {data.good}</p>
      <p>Neutral: {data.neutral}</p>
      <p>Bad: {data.bad}</p>
      <p>Total feedback: {countTotalFeedback()}</p>
      <p>Positive percentage: {countPositiveFeedbackPercentage()}</p>
    </div>
  );
}
