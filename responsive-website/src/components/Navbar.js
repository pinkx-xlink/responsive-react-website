import React, { useState } from 'react'


function Navbar() {
  return (
    <>
        <nav classNName="navbar">
            <div className="navbar-conntainer">
                {/* replaces <a> tag  */}
                <Link to="/" classNName="navbar-logo">
                  TRVL
                </Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar