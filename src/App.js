import './App.css';
import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';
import {Route, Routes } from "react-router-dom";
import { Build } from './components/Build/Build';
import banana from "./assets/banana.png";
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(100);
  const addBanana = () => {
    return setCount(count + 10);
  }
  const eatBanana = () => {
    return setCount(count - 10);
  }
  
  return (
    <div className="App">
      <Header banana={banana} bananaCount={count} addBanana={addBanana}/>
      <Routes>
        <Route path="/build" element={<Build eatBanana={eatBanana}/>}></Route>
        <Route path="/content" element={<Content />}></Route>
      </Routes>
    </div>
  );
}

export default App;
