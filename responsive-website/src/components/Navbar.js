import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
        <nav classNName="navbar">
            <div className="navbar-conntainer">
                {/* replaces <a> tag  */}
                <Link to="/" classNName="navbar-logo">
                  TRVL <i className="fab fa typo3"></i>   
                </Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar