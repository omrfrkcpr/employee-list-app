import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Person from "../components/Person";
import Main from "../pages/Main";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Person/:username" element={<Person />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
