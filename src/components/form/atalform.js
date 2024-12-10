import React, { useState } from 'react';
import './atalform.css';

function AtalForm() {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="atal-form-container">
      <h1>Welcome to Atal's fantacy world!</h1>
      <h2>
      where you can be choosen as the king and ofcourse Atal as your queen
      </h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Submit</button>
      </form>

      {showPopup && (
        <div className="popup-message">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCpMswZDfV1zTiTKM4IkoW-E_k_lnCv_CYQ&s" alt="User Icon" />
        <p>Atal is 3km away from you</p>
        <button className="popup-close" onClick={closePopup}>X</button>
      </div>
      
      )}
      <div className="popup-message1">
        <img src="https://thechive.com/wp-content/uploads/2017/12/chivettteee570.jpg?attachment_cache_bust=3739736&quality=85&strip=info&w=400" alt="User Icon" />
        <p>Ayush is 2m away from you</p>
        <button className="popup-close" onClick={closePopup}>X</button>
      </div>

    </div>
  );
}

export default AtalForm;
