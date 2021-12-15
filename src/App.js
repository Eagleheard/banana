import './App.css';
import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';
import {Route, Routes } from "react-router-dom";
import { Build } from './components/Build/Build';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/build" element={<Build />}></Route>
        <Route path="/content" element={<Content />}></Route>
      </Routes>
    </div>
  );
}

export default App;
