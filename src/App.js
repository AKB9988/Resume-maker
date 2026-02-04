import { useState } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar.js'
import ResumeApp from './Components/ResumeApp.js';
import About from './Components/About.js';
function App() {
  const [mode,setMode] = useState('light');
   if (mode === "dark" && !document.body.classList.contains("dark-mode")) {
    document.body.classList.add("dark-mode");
    document.body.style.backgroundColor = "#090040";
  }

  const toggleMode=()=>{
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#090040';
        document.body.classList.add('dark-mode');
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='aliceblue';
         document.body.classList.remove('dark-mode');
      }
  }
  return (
    <HashRouter>
      <Navbar toggle={toggleMode} mode={mode} />

      <Routes>
        <Route path="/" element={<ResumeApp mode={mode} />} />
        <Route path="/home" element={<ResumeApp mode={mode} />} />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;