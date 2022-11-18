import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import About from "./about";
import Research from "./research";
import Resume from "./resume";
import Hobbies from "./hobbies";
import Contact from "./contact";

import '../styles/global.css'
import '../styles/bootstrap-icons.css'
// import useLocoScroll from "../hooks/useLocoScroll";
import useScroll from "../hooks/useScroll";

// import "../styles/home.scss";

const Home = () => {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);


  useScroll(!preloader);

  // useEffect(() => {
  //   if (!preloader && ref) {
  //     if (typeof window === "undefined" || !window.document) {
  //       return;
  //     }
  //   }
  // }, [preloader]);

  // const [timer, setTimer] = React.useState(3);

  // const id = React.useRef(null);

  // const clear = () => {
  //   window.clearInterval(id.current);
  //   setPreload(false);
  // };

  // React.useEffect(() => {
  //   id.current = window.setInterval(() => {
  //     setTimer((time) => time - 1);
  //   }, 10);
  //   return () => clear();
  // }, []);

  // React.useEffect(() => {
  //   if (timer === 0) {
  //     clear();
  //   }
  // }, [timer]);

  // if (typeof window === "undefined" || !window.document) {
  //   return null;
  // }

  return (
    <>
      {/* <CustomCursor /> */}
      {/* {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Flirty flowers</h1>
          <h2>Rio de Janeiro</h2>
        </div>
      ) : ( */}
        {/* <div> */}
            {/* <div classname="layout">
            <div></div>
            <div><Header />
                <About /></div>    
            </div> */}
            <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
            <Sidebar/>
            <div 
                class="main-container" 
                id="main-container" 
                // data-scroll-container 
                ref = {ref}>
                    <main id="main">
                        {/* <Header/> */}
                        <About/>
                        <Research/>
                        <Resume/>
                        {/* <Hobbies/> */}
                        {/* <Contact/> */}
                    </main>
                
            </div>
            <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
            
        {/* </div> */}
      {/* )} */}
    </>
  );
};
export default Home;