import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import React from "react";

function Header() {
  return (
    <div>
      <nav className="nav-header">
        <img
          src="data:image/png;base64,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"
          width="80px"
        />
        <h1>Rate Ramapo</h1>
        <h2>Hello</h2>
      </nav>
    </div>
  );
}

const page = (
  <div>
    <Header />
    <h2>What would you like to rate</h2>
    <h3>Things to Rate:</h3>
    <ul>
      <li>Profesors</li>
      <li>Classes</li>
      <li>Dorms</li>
      <li>Food</li>
      <li>Jobs</li>
      <li>Clubs</li>
    </ul>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));
