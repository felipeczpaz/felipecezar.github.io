import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    const video = document.getElementById("background-video");
    video.muted = true;
    video.play();

    video.addEventListener("play", () => {
      setTimeout(() => {
        video.muted = false;
        video.volume = 1.0;
      }, 1000); // Unmute after a short delay
    });
  }, []);

  return (
    <div className="App">
      <video id="background-video" className="video-bg" muted loop>
        <source
          src="/videos/Wiz Khalifa - Real Rich feat. Gucci Mane [Official Music Video] [9nV9GNjXFDo].webm"
          type="video/webm"
        />
        Your browser does not support HTML5 video.
      </video>
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
