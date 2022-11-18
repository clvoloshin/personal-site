import React from 'react'
import Navigator from './Navigator'
import '../styles/global.css'
import '../styles/bootstrap.css'
import '../styles/bootstrap-utilities.css'
import '../vendor/boxicons/css/boxicons.min.css'

export default function Sidebar() {
 
    return (

    
    <header id='header'>
        <div class="d-flex flex-column">

        <div class="profile">
        <img src="profile-pic.jpg" alt="" class="img-fluid rounded-circle"></img>
        <h1 class="text-light">Cameron Voloshin</h1>
        <div class="social-links mt-3 text-center">
            <a href="https://scholar.google.com/citations?user=wdxYovMAAAAJ&hl=en&oi=ao" target="_blank" class="scholar"><i class="bx bxs-graduation"></i></a>
            <a href="./resume/Cameron_Voloshin_Resume.pdf" target="_blank" class="resume"><i class="bx bx-briefcase"></i></a>
            {/* <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a> */}
            {/* <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a> */}
            <a href="https://www.linkedin.com/in/cameron-voloshin-3b91b6109/" target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
        </div>

        <Navigator />
        </div>
            
    </header>
  )
}
