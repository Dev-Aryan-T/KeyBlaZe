import React, { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import First from "./components/first/First.js";
import Section1 from "./components/section/Section1.js";
import Login from "./components/login/Logins.js";
import Logo from "./components/imgs/logo.png";
import TypingAI from "./components/typingai/TypingAi.js";

function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [typedWords, setTypedWords] = useState([]);

  const handleUserIconClick = () => {
    setIsLoginVisible(true);
  };

  const closeLoginModal = () => {
    setIsLoginVisible(false);
  };

  const handleKeyPress = (event) => {
    setTypedWords(prevTyped => [...prevTyped, { key: event.key, time: Date.now() }]);
  };

  return (
   <>
      {/* Main App Section */}
      <div className="Nav">
        <img src={Logo} alt="Logo" />
        <Navbar onUserIconClick={handleUserIconClick} />
      </div>

      <div className="App" tabIndex={0} onKeyDown={handleKeyPress}>
        <br />
        <br />
        <div className="first">
          <First />
        </div>
        <div className="main-container">
          <Section1 />
        </div>
      </div>

      {/* AI Typing Analysis Section */}
      <TypingAI typedWords={typedWords} />

      {/* Login Modal */}
      {isLoginVisible && (
        <div className="login-modal">
          <Login onClose={closeLoginModal} />
        </div>
      )}

    </>
  );
}

export default App;
