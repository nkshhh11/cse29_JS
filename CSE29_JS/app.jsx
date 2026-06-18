import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Student from "./component/Student";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Student Information</h1>

      <Student name="aryan" course="Computer Science" marks="85" />
      <Student name="ansh" course="dsa" marks="92" />
      <Student name="surya" course="mechanics" marks="78" />

    </div>
  );
}

export default App;