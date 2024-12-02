import { useState } from "react";
import "./App.scss";

function App() {
  return (
    <>
      <Nav />
      <Name name="John Doe" />
      <Name name="Mike Hawk" />
      <Name name="Mike Oxlong" />
    </>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

function Name({ name }) {
  return <p>{name}</p>;
}

export default App;
