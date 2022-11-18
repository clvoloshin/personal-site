import { Link } from 'gatsby'
import React from 'react'
import '../styles/global.css'
import '../vendor/boxicons/css/boxicons.min.css'

export default function Navigator() {
  return (
    <nav id="navbar" class="nav-menu navbar">
      <div className='links'>
          {/* <Link to="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i><span>Home</span></Link> */}
          <Link to="#about" class="nav-link scrollto active"><i class="bx bx-user"></i> <span>About Me</span></Link>
          <Link to="#research" class="nav-link scrollto"><i class="bx bx-test-tube"></i> <span>Research</span></Link>
          <Link to="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Education & Current Work</span></Link>
          {/* <Link to="#hobbies" class="nav-link scrollto"><i class="bx bxs-music"></i> <span>Hobbies</span></Link> */}
          {/* <Link to="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></Link> */}
      </div>
    </nav>
  )
}
