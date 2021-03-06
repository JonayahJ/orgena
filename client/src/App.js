import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SchedulePage from "./pages/schedule";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ContactPage from "./pages/contact";
import TestimonialsPage from "./pages/testimonials";
import ServicesPage from "./pages/services";
import ConsultantsPage from "./pages/consultants";
import AboutUsPage from "./pages/about";
import TermsPage from "./pages/terms";
import PrivacyPage from "./pages/privacy";
import CookiesPage from "./pages/cookies";
import ScrollToTop from "./components/ScrollToTop";
import ReactGa from "react-ga"

function App() {
  useEffect(() => {
    ReactGa.initialize("UA-201124924");
    
    // Pageviews
    ReactGa.pageview(window.location.pathname + window.location.search);

  }, [])

  const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  
  return (
    <Router>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> 
      <Switch>
        <Route path="/"  component={Home} exact />
        <Route path="/about-us"  component={AboutUsPage} exact />
        <Route path="/consultants"  component={ConsultantsPage} exact />
        <Route path="/contact"  component={ContactPage} exact />
        <Route path="/cookies"  component={CookiesPage} exact />
        <Route path="/privacy"  component={PrivacyPage} exact />
        <Route path="/schedule"  component={SchedulePage} exact />
        <Route path="/services"  component={ServicesPage} exact />
        <Route path="/terms"  component={TermsPage} exact />
        <Route path="/testimonials"  component={TestimonialsPage} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
