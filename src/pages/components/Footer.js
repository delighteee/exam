import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-links">
      <Link to="/"> Home </Link>
      <Link to="programtracks"> Programs</Link>
      <Link to="/"> Contact </Link>
      
      </div>
      <p className="footer-text">Hauxano &copy; 2022  | Built by Tolulope Oyewumi</p>
    </footer>
  );
}
