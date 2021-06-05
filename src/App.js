import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SchedulePage from "./pages/schedule";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />   
      <Switch>
        <Route path="/"  component={Home} exact />
        <Route path="/schedule"  component={SchedulePage} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
