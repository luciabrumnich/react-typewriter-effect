import React from "react";
import Typewriter from "typewriter-effect";
import "./Header.css";

function Typing() {
  return (
    <div className="type">
      <Typewriter
        options={{
          strings: ["geek", "mover", "biomech", "software"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export default Typing;
