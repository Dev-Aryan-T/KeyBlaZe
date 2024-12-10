import React from "react";
import "./Navbar.css";
import { FaKeyboard, FaCrown, FaInfo, FaCog, FaBell, FaUser } from "react-icons/fa";

export default function Navbar({ onUserIconClick }) {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <span className="glowing-text">Aryan Thapaliya</span>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <div className="right_links">
          <li>
            <button>
              <FaKeyboard className="nav-icon" />
            </button>
          </li>
          <li>
            <button>
              <FaCrown className="nav-icon" />
            </button>
          </li>
          <li>
            <button>
              <FaInfo className="nav-icon" />
            </button>
          </li>
          <li>
            <button>
              <FaCog className="nav-icon" />
            </button>
          </li>
        </div>
        <div className="left_links">
          <li>
            <button>
              <FaBell className="nav-icon" />
            </button>
          </li>
          <li>
            {/* Call the passed function on click */}
            <button onClick={onUserIconClick}>
              <FaUser className="nav-icon" />
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
}
