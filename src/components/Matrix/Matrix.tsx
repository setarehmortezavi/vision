import React, { useState } from "react";
import "./Matrix.css";
import Do from "./Sounds/Do.mp3";
import Re from "./Sounds/Re.mp3";
import Mi from "./Sounds/Mi.mp3";
import Fa from "./Sounds/Fa.mp3";
import Sol from "./Sounds/Sol.mp3";
import La from "./Sounds/La.mp3";
import Si from "./Sounds/Si.mp3";
import DoUpper from "./Sounds/nextC.mp3";
import Final from "./Sounds/Final.mp3";

const Matrix: React.FC = () => {
  const arrayData = [
    "S",
    "5",
    "T",
    "6",
    "R",
    "7",
    "H",
    "9",
    "H",
    "A",
    "P",
    "P",
    "Y",
    "14",
    "15",
    "B",
    "I",
    "T",
    "H",
    "Y",
    "21",
    "X",
    "X",
    "D",
    "A",
    "Y",
    "X",
    "X",
  ];

  const [opacity, setOpacity] = useState<number[]>(
    Array(arrayData.length).fill(1)
  );

  const changeOpacity = (index: number) => {
    const newOpacity = [...opacity];
    newOpacity[index] = newOpacity[index] === 1 ? 0 : 1;
    setOpacity(newOpacity);
  };

  const onClickPlay = (index: number) => {
    if (index + 1 === 1) {
      new Audio(Do).play();
    }
    if (index + 1 === 2) {
      new Audio(Sol).play();
    }
    if (index + 1 === 3) {
      new Audio(Sol).play();
    }
    if (index + 1 === 4) {
      new Audio(Sol).play();
    }
    if (index + 1 === 5) {
      new Audio(Sol).play();
    }
    if (index + 1 === 6) {
      new Audio(DoUpper).play();
    }
    if (index + 1 === 7) {
      new Audio(DoUpper).play();
    }
    if (index + 1 === 8) {
      new Audio(Sol).play();
    }
    if (index + 1 === 9) {
      new Audio(Sol).play();
    }
    if (index + 1 === 10) {
      new Audio(DoUpper).play();
    }
    if (index + 1 === 11) {
      new Audio(DoUpper).play();
    }
    if (index + 1 === 12) {
      new Audio(Si).play();
    }
    if (index + 1 === 13) {
      new Audio(La).play();
    }
    if (index + 1 === 14) {
      new Audio(Si).play();
    }
    if (index + 1 === 15) {
      new Audio(Re).play();
    }
    if (index + 1 === 16) {
      new Audio(Sol).play();
    }
    if (index + 1 === 17) {
      new Audio(Sol).play();
    }
    if (index + 1 === 18) {
      new Audio(Si).play();
    }
    if (index + 1 === 19) {
      new Audio(Sol).play();
    }
    if (index + 1 === 20) {
      new Audio(Sol).play();
    }
    if (index + 1 === 21) {
      new Audio(Si).play();
    }

    if (index + 1 === 22) {
      new Audio(Sol).play();
    }

    if (index + 1 === 23) {
      new Audio(Sol).play();
    }

    if (index + 1 === 24) {
      new Audio(La).play();
    }

    if (index + 1 === 25) {
      new Audio(Sol).play();
    }

    if (index + 1 === 26) {
      new Audio(La).play();
    }

    if (index + 1 === 27) {
      new Audio(Si).play();
    }
    if (index + 1 === 28) {
      new Audio(Final).play();
    }
  };
  return (
    <div className="matrix">
      {arrayData.map((value, index) => (
        <div
          key={index}
          className="cell"
          style={{
            backgroundColor: opacity[index] === 1 ? "white" : "black",
            opacity: opacity[index],
            transition: "opacity 0.5s ease",
            color: opacity[index] === 1 ? "black" : "white",
          }}
          onClick={() => {
            onClickPlay(index);
            changeOpacity(index);
          }}
        >
          {arrayData[index]}
        </div>
      ))}
    </div>
  );
};

export default Matrix;
