import React, { useState, useEffect } from 'react';
import './Section1.css';

export default function MainBody() {
  const [words, setWords] = useState([]);
  const [typedLetters, setTypedLetters] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [typedWords, setTypedWords] = useState(0);
  const [timerEnded, setTimerEnded] = useState(false);
  const [totalTypedLetters, setTotalTypedLetters] = useState(0);

  // Generate random words
  const generateWords = () => {
    const wordList = [
      'hello', 'world', 'react', 'typing', 'test', 'random', 'clone', 'speed', 'practice', 'developer',
    ];
    return Array.from({ length: 50 }, () =>
      wordList[Math.floor(Math.random() * wordList.length)]
    );
  };

  useEffect(() => {
    setWords(generateWords());
  }, []);

  // Start timer when typing begins
  useEffect(() => {
    if (startTime === null && typedLetters.length > 0) {
      setStartTime(Date.now());
    }
  }, [typedLetters]);

  // Update elapsed time and end timer after 15 seconds
  useEffect(() => {
    let timer;
    if (startTime) {
      timer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        setTimeElapsed(elapsed);
        if (elapsed >= 15) { // End timer after 15 seconds
          clearInterval(timer);
          setTimerEnded(true);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [startTime]);

  // Calculate WPM
  const calculateWPM = () => {
    return typedWords > 0 ? Math.round((typedWords / 15) * 60) : 0;
  };

  // Calculate Accuracy
  const calculateAccuracy = () => {
    return totalTypedLetters > 0 ? Math.round((typedWords * 100) / totalTypedLetters) : 0;
  };

  // Prevent space from scrolling
  const preventScrollOnSpace = (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', preventScrollOnSpace);
    return () => {
      window.removeEventListener('keydown', preventScrollOnSpace);
    };
  }, []);

  // Handle typing
  const handleKeyPress = (e) => {
    if (timerEnded) return; // Stop handling input if timer has ended

    const key = e.key;

    if (key === ' ') {
      // Move to the next word when space is pressed
      if (typedLetters.trim() === words[currentWordIndex]) {
        setTypedWords((prev) => prev + 1); // Increment correct words count
      }
      setTotalTypedLetters((prev) => prev + typedLetters.length);
      setCurrentWordIndex((prevIndex) => prevIndex + 1);
      setTypedLetters(''); // Reset typed letters
    } else if (key === 'Backspace') {
      // Handle backspace
      setTypedLetters((prev) => prev.slice(0, -1));
    } else if (/^[a-zA-Z]$/.test(key)) {
      // Add the typed letter if it's an alphabetical character
      setTypedLetters((prev) => prev + key);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [timerEnded, typedLetters, words, currentWordIndex]);

  return (
    <div className="main-body">
      <div className={`word-display ${timerEnded ? 'blurred' : ''}`}>
        {words.map((word, index) => (
          <span key={index} className="word">
            {word.split('').map((letter, letterIndex) => {
              const isTyped = index === currentWordIndex && typedLetters[letterIndex];
              const isCorrect =
                isTyped && typedLetters[letterIndex] === letter;
  
              return (
                <span
                  key={letterIndex}
                  className={`letter ${
                    index === currentWordIndex
                      ? isTyped
                        ? isCorrect
                          ? 'correct'
                          : 'incorrect'
                        : ''
                      : ''
                  }`}
                >
                  {letter}
                </span>
              );
            })}{' '}
          </span>
        ))}
      </div>
      {timerEnded && (
        <div className="stats centered">
          <p className="final">Mukh jastai aafno finger pani xito chalau!</p>
          <p className="final">WPM: {calculateWPM()}</p>
          <p className="final">
            Accuracy: {((typedWords / currentWordIndex) * 100).toFixed(2)}%
          </p>
        </div>
      )}
    </div>
  );
  
  
}
