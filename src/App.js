import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import './App.css';
import First from './components/first/First.js';
import Logo from './components/imgs/logo.png';
import Section1 from './components/section/Section1.js';
import Login from './components/login/Logins.js';


function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleUserIconClick = () => {
    setIsLoginVisible(true);
  };

  const closeLoginModal = () => {
    setIsLoginVisible(false);
  };

  return (
<>
      {/* Main App Section */}
      <div className="Nav">
        <img src={Logo} alt="" />
        <Navbar onUserIconClick={handleUserIconClick} />
      </div>
      <div className="App">
        <br />
        <br />
        <div className="first">
          <First />
        </div>
        <div className="main-container">
          <Section1 />
        </div>
      </div>

      {/* Login Modal */}
      {isLoginVisible && (
        <div className="login-modal">
          <Login onClose={closeLoginModal} />
        </div>
      )}

      {/* Redirect Link */}
      <h1 className="title">
        Monkeytype Clone coming soon! This message is in special request of Atal.
        At your own risk{' '}
        <a href="/form" className="atal-link">
          click here
        </a>{' '}
        to see the website of Atal too.
      </h1>
      </>
  );
}

export default App;
