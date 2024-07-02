import React, { useState, useEffect } from "react";



export function Counter() {
  const [count, setCount] = useState(0);

  const [wpm, setWpm] = useState(0);
  const [typedWords, setTypedWords] = useState([]);

  const [input, setInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      calculateWpm();
    }
  }, [timeLeft]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setTypedWords(e.target.value.split(' '));
  }

  const calculateWpm = () => {
    setWpm((typedWords.length / 60) * timeLeft);
  };

  return (
    <div className="">
      <textarea value={input} onChange={handleInputChange} />
      <div>Time left: {timeLeft}</div>
      <div>Words typed: {typedWords.length}</div>
    </div>
  );
};
