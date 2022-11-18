import React from "react"
import '../vendor/boxicons/css/boxicons.min.css'
import Typed from 'react-typed';


export default function About({ children }) {
  return (
      <section id="about" class="about">
      <div class="container">

        <div class="section-title">
          <h2>About</h2>
          {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
        </div>

        <div class="row">
          <div class="col-lg-4" data-aos="fade-right">
            <img src="./profile-pic.jpg" class="img-fluid" alt=""></img>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>
            <Typed
            strings={[
                'Cameron Voloshin',
                'AI Researcher',
                'Engineer',
                'Hobby Collector']}
                typeSpeed={50}
                backSpeed={50}
                backDelay={1000}
                // attr="placeholder"
                loop={true} >
                {/* <input type="typed"/> */}
            </Typed>
            </h3>
            <p class="fst-italic">
              National Science Foundation Ph.D Fellow at Caltech, advised by <a href="http://www.yisongyue.com/group.php" target="_blank">Yisong Yue</a>. 
            </p>
            {/* <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div> */}
            <p>
              
              I do research in the field of Reinforcement Learning, with a primary focus
              on developing methods to guarantee desirable post-learning performance of computational agents.

              </p>
            <p>

              {/* I like to struggle and solve hard problems with talented people.  */}
              Outside of research, I run a consulting firm. We deliver machine learning and data-driven solutions 
              to companies of all sizes with a special focus on recommendation systems, prediction, and computer vision domains. 
              We love helping companies achieve their KPIs.
              If your company needs help in their machine learning goals, reach out to me.
              </p>
              <p>
              Previously, I worked as a ML Engineer and Researcher at several companies. In a previous life, I spent some time in the finance world
              working in Venture Capital, Investment Banking and Prop Trading. 
            </p>

            <p>
              Outside of work, I love trying new hobbies. Some recent ones include starting a tango orchestra and learning to sail. 
             My current favorite cocktail: Last Word
            </p>

            
              <p>
              Interested in chatting about Reinforcement Learning, 
                engineering or new interests to explore?
                <br />
              <em style={{"fontWeight":"bold"}}>Contact:</em> cvoloshin [at] caltech [dot] edu
              </p>
            
          </div>
        </div>

      </div>
    </section>
    )
}
