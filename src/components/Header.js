import React from "react"
import Layout from "./Layout"
import Typed from 'react-typed';

export default function Header() {
      return (
    // <Layout>
    <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
      <div class="hero-container aos-init aos-animate" data-aos="fade-in">
        <h1>Cameron Voloshin</h1>
        <p>I'm&ensp;
        <Typed
            strings={[
                'an AI Researcher',
                'a Developer',
                'a Musician',
                'a Dancer']}
                typeSpeed={50}
                backSpeed={50}
                backDelay={1000}
                // attr="placeholder"
                loop={true} >
                {/* <input type="typed"/> */}
            </Typed>
          </p>
      </div>
    </section>
  // </Layout>
  )
}
