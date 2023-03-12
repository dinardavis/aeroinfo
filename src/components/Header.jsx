import React from "react";
import { Link } from "react-router-dom";


export default function Header() {

  return (
    <header className="main-header">
      <Link to="/">
        <img className="main-logo" src="/imgs/aeroinfo_logo.png" alt="AeroInfo Logo"/>
      </Link>
      <input className="main-search-input" />
      <nav className="main-nav">
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </header>
  )
}