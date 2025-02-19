import React, { useState, useEffect } from "react";
import './Typingai.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";

const FINGER_MAP = {
  "qaz": "Left Pinky",
  "wsx": "Left Ring",
  "edc": "Left Middle",
  "rfvtgb": "Left Index",
  "yhnujm": "Right Index",
  "ik,": "Right Middle",
  "ol.": "Right Ring",
  "p;/'": "Right Pinky",
};

const TypingAI = () => {
  const [typedWords, setTypedWords] = useState([]);
  const [fingerSpeed, setFingerSpeed] = useState([]);
  const [accuracy, setAccuracy] = useState(0);
  const [suggestions, setSuggestions] = useState("");

  useEffect(() => {
    const handleKeyPress = (event) => {
      setTypedWords((prevWords) => [
        ...prevWords,
        { key: event.key, time: Date.now(), correct: event.key === 'your predefined word' },
      ]);
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const analyzeTyping = () => {
    if (typedWords.length < 2) {
      alert("⚠️ Type more characters before analyzing!");
      return;
    }

    let fingerStats = {};
    let correctTypedCount = 0;
    let totalTypedCount = 0;

    typedWords.slice(1).forEach((word, i) => {
      const finger = Object.keys(FINGER_MAP).find((keys) =>
        keys.includes(word.key)
      );
      const fingerName = FINGER_MAP[finger] || "Unknown";

      if (!fingerStats[fingerName]) {
        fingerStats[fingerName] = { total: 0, count: 0 };
      }

      fingerStats[fingerName].total += (typedWords[i + 1].time - typedWords[i].time);
      fingerStats[fingerName].count += 1;

      if (word.correct) correctTypedCount += 1;
      totalTypedCount += 1;
    });

    const speedData = Object.keys(fingerStats).map((finger) => ({
      finger,
      speed: Math.round((fingerStats[finger].total / fingerStats[finger].count) || 0),
    }));

    setFingerSpeed(speedData);
    setAccuracy(((correctTypedCount / totalTypedCount) * 100).toFixed(2));
    setSuggestions("Your typing is balanced. Keep it up!");
  };

  return (
    <div className="typing-analysis">
      <h2>Real-Time Typing Speed Analysis</h2>
      <p>Start typing, then click "Analyze Typing" to see your finger performance and accuracy.</p>
      <button className="Analyze" onClick={analyzeTyping}>Analyze</button>

      <div className="accuracy-display">Accuracy: {accuracy}%</div>
      {suggestions && <div className="suggestion-box">{suggestions}</div>}

      {fingerSpeed.length > 0 && (
        <div className="chart-container">
          <h3>Typing Speed Per Finger (ms)</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={fingerSpeed}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="finger" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="speed" fill="#00ffcc" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default TypingAI;
