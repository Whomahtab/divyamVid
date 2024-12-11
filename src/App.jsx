import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";

const PlayICon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="playIcon"
  >
    <polygon points="6 3 20 12 6 21 6 3" />
  </svg>
);

function App() {
  const videoRef = useRef(null);
  const buttonRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      try {
        videoRef.current.play();
        if (buttonRef.current) {
          buttonRef.current.style.display = "none";
          buttonRef.current == null;
        }
      } catch (error) {
        console.log("Video play failed:", error);
      }
    }
  };

  useEffect(() => {
    let c = document.querySelector("body");
    c.click();
    const a = videoRef.current;
    const playVid = async () => {
      a.play().then(() => {
        buttonRef.current.style.display = "none";
      });
    };
    playVid();
  }, []);

  return (
    <>
      <Analytics />
      <motion.div className="main-wrapper">
        <motion.div className="videoWrapper">
          <motion.div
            initial={{ y: 50, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "ease", duration: 1.2 }}
          >
            <video
              className="videoPlayer"
              loop
              muted
              ref={videoRef} // Reference to the video
              src="https://res.cloudinary.com/dhdiayxo7/video/upload/f_auto:video,q_auto/vwkkodjkjdbz2cpu3fnh"
            />
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ ease: "easeIn", duration: 3 }}
            ref={buttonRef}
            className="btnPlayPause"
            onClick={handlePlay}
          >
            <PlayICon />
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
}

export default App;
