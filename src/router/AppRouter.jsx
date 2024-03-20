import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Person from "../components/Person";
import Home from "../components/Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Person/:username" element={<Person/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
