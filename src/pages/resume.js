import React from "react"
import Layout from "../components/Layout"
import '../styles/bootstrap-icons.css'

export default function Resume() {
  return (
    <section id="resume" class="resume">
    <div class="container">

      <div class="section-title">
        <h2>Education + Work 
          <a href="./resume/Cameron_Voloshin_Resume.pdf" target="_blank" class="resume" style={{"padding": "20px"}}><i class="bx bx-briefcase">PDF</i></a>
        </h2>
        
        {/* <p>
          Click <a href="./resume/Cameron_Voloshin_Resume.pdf" target="_blank" class="resume">here</a> for a full resume.
        </p> */}
      </div>

      <div class="row">
        <div class="col-lg-6" data-aos="fade-up">
          {/* <h3 class="resume-title">Summary</h3> */}
          {/* <div class="resume-item pb-0">
            <h4>Alex Smith</h4>
            <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
            <ul>
              <li>Portland par 127,Orlando, FL</li>
              <li>(123) 456-7891</li>
              <li>alice.barkley@example.com</li>
            </ul>
          </div> */}

          <h3 class="resume-title">Education</h3>
          <div class="resume-item">
            <h4>Ph.D in Computing & Mathematical Sciences</h4>
            <h5>2019 - 2023 Expected</h5>
            <p><em>California Institute of Technology, Pasadena, CA</em></p>
            {/* <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p> */}
          </div>
          <div class="resume-item">
            <h4>B.S in Applied & Computational Mathematics</h4>
            <h5>2013 - 2017</h5>
            <p><em>California Institute of Technology, Pasadena, CA</em></p>
            {/* <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p> */}
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 class="resume-title">Current Work</h3>
          <div class="resume-item">
            <h4>Graduate Student</h4>
            <h5>2019 - Present</h5>
            <p><em>Caltech, Pasadena, CA</em></p>
            <ul>
              <li>I carry out research in Reinforcement learning with a primary focus in Off-policy Evaluation and Policy Optimization under constraints</li>
            </ul>
          </div>
          <div class="resume-item">
            <h4>Research Intern</h4>
            <h5>2022 - 2022</h5>
            <p><em>Argo AI, Pittsburgh, PA</em></p>
            <ul>
              <li>Reinforcement Learning and Off-policy Evaluation in the Autonomous Vehicle space.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </section>
  )
}
