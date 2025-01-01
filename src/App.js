import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import ItemDetail from "./Components/Detail";
import LoginForm from "./pages/login";
import About from "./Components/About";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />{" "}
        <Route path="/login" element={<LoginForm />} />{" "}
        <Route path="/home" element={<Home />} />{" "}
        <Route path="/contact" element={<Home />} />{" "}
        <Route path="/detail/:id" element={<ItemDetail />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
