import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="social-icons">
        <a
          href="https://www.x.com/felipeczpaz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-x-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/felipeczpaz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/felipeczpaz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.github.com/felipeczpaz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default App;
