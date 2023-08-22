import logo from './logo.svg';
import React from 'react';
import './App.css';
import './style.css';
import MessageCard from "./components/MessageCard";
import DataCard from "./components/DataCard";

function App() {
  return (
    <div className="App">
        <nav>
          <a href="/">React with CSS Styles</a>
        </nav>

        <MessageCard/>
        <DataCard/>

    </div>
  );
}

export default App;
