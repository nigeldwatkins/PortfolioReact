import React, { useState } from "react";
import "../index.css";

// Navbar function: Main navigation bar component
function Navbar() {
  return (
    // Renders Navigation components with child components
    <Navigation classname="nav-list">
      <NavItems home="Home" />
      <NavItems about="About Me" />
      <NavItems work="Work" />
      <NavItems contact="Contact Information" />
      <NavItems skills="Skills" />
      <NavItems signup="Sign Up" />
      <NavDrop />
    </Navigation>
  );
}

// Navigation function: Defines  the structure of the navigation bar
function Navigation(props) {
  return (
    // Renders a navigation bar with a list of child components
    <nav className="navhome">
      <ul className="navbar-home"> {props.children}</ul>
    </nav>
  );
}

// Represents individual navigation items
function NavItems(props) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    // Renders list items with anchor tags for each navigation item
    <li className="nav-item">
      <div  className="icon-button" onClick={() => scrollToSection('home')}>
        {props.home}
      </div>
      <div  onClick={() => scrollToSection('aboutme')}>

        {props.about}
      </div>
      <div onClick={() => scrollToSection('work')}>
        {props.work}
      </div>
      <div onClick={() => scrollToSection('contact')}>
        {props.contact}
      </div>
      <div onClick={() => scrollToSection('skills')}>
        {props.skills}
      </div>
    </li>
  );
}

// Dropdown menu for navigation items
function NavDrop() {
  // Manages dropdown state using useState hook
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown state
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to scroll to a section smoothly
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
      // Close the dropdown after scrolling to a section
      setIsDropdownOpen(false);
    }
  };

  return (
    // Renders a header with name and a button to toggle dropdown
    <div>
      <header className="page-header">
        <ul>
          <li className="dropdown-menu-bar" onClick={handleDropdownToggle}>
            <div className="bar top-bar" />
            <div className="bar middle-bar" />
            <div className="bar bottom-bar" />
          </li>
        </ul>
      </header>
      {isDropdownOpen && (
        <ul className="dropdown-menu-list">
          <li className="list-tab" onClick={() => scrollToSection('home')}>Home</li>
          <li className="list-tab" onClick={() => scrollToSection('aboutme')}>About Me</li>
          <li className="list-tab" onClick={() => scrollToSection('work')}>Work</li>
          <li className="list-tab" onClick={() => scrollToSection('contact')}>Contact</li>
          <li className="list-tab" onClick={() => scrollToSection('skills')}>Skills</li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;