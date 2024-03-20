import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Person from "../components/Person";
import Home from "../components/Home";

const AppRouter = () => {
  return (
    <Router>
      <Home />
      <Routes>
        <Route path="/:username" element={<Person/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
