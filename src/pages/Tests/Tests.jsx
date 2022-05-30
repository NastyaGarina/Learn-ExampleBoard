import React, { useState } from "react";
import { findVowels } from "./test";
import "./Tests.css";

const TestPage = () => {
  const [string, setString] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="holder">
      <div className="commercial">
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => setString(event.target.value)}
        />
        <button
          className="buttonTest"
          onClick={() => setResult(findVowels(string))}
        >
          Кнопка
        </button>
        <div>{result}</div>
      </div>
    </div>
  );
};
export default TestPage;
