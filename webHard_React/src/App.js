import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Main from "./Main/Main";
import Login from "./Login/Login";
import Manager from "./Manager/ManagerMain";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/manager" element={<Manager />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
