import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import Layout from "../components/Layout"
import '../styles/global.css'
import '../styles/bootstrap-icons.css'
import { graphql, useStaticQuery } from "gatsby"
import Isotope from "isotope-layout"
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
import '../styles/popup.css';
import Modal from "react-modal";
import {  StaticImage } from "gatsby-plugin-image"

const Research = () => {
  
  const data = useStaticQuery(graphql`
  query ProjectsPage {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          title
          image_or_movie
          category
          bibtex
          pdf
          official_link
          authors
          abstract
        }
      }
    }
  }`)
  

  const projects = data.allMarkdownRemark.nodes
  
  const [isotope, setIsotope] = useState(null);
  // state for storing the filter keyword, with an initial value of *, which matches everything
  const [filterKey, setFilterKey] = useState('*');
  const [activeKey, setActiveKey] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [openTitle, setOpenTitle] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [showAbstract, setShowAbstract] = React.useState(false)
  const [whichAbstract, setWhichAbstract] = React.useState("")

  const toggleModal = (title) => {
    setIsOpen(!isOpen);
    setOpenTitle(title)
  }
  
  // useEffect(() => {
  //   setIsotope(
  //     new Isotope('.filter-container', {
  //       // filter-container: className of the parent of the isotope elements
  //       itemSelector: '.filter-item', // filter-item: className of the isotope elements
  //       layoutMode: 'vertical', // for horizontal isotope
  //     })
  //   );
  // }, []); // [] makes this useEffect work like a componentDidMount in a class component

  // console.log(isotope)

  // useEffect(() => {
  //   if (isotope) {
  //     // sanity check
  //     filterKey === '*'
  //       ? isotope.arrange({ filter: `*` })
  //       : isotope.arrange({ filter: `.${filterKey}` });
  //   }
  // }, [isotope, filterKey]);

  const handleFilterKeyChange = key => {setFilterKey(key); console.log(key)};
  const toggleAbstract = (key) => {
    if (showAbstract && (key !== whichAbstract))
    {
      setWhichAbstract(key)
    }
    else if (showAbstract && (key === whichAbstract))
    {
      setWhichAbstract("")
      setShowAbstract(!showAbstract)
    } else 
    {
      setWhichAbstract(key)
      setShowAbstract(!showAbstract)
    }
    
  }

  return (
    <section id="research" class="portfolio section-bg">
    <div class="container">

      <div class="section-title">
        <h2>Research</h2>
        My research can be broadly categorized into two subfields of RL:
      </div>

      <div style={{"display": "flex"}}>
        <div style={{"padding": "20px"}}>
          <h3> Off-Policy Policy Evaluation (OPE)</h3>
        <p>
          OPE is the task of predicting an agent's performance before deployment, the last step of the testing pipeline. 
          This line of work is meant to ensure that the agent will behave in a desirable way.
        </p>
        </div>
        <div style={{"padding": "20px"}}>
        <h3> Constrained Policy Learning </h3>
        <p>
          Unlike OPE, ensuring desirable performance can also be baked into the learning process itself by requiring the agent to 
          satisfy a particular set of constraints. We study the ways to both express and enforce the constraints during learning.
        </p>
        </div>
      </div>

      <div >
        
          {/* <div class="filter-container " style={{"position": "relative", "height":"auto"}}> */}
          <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li class={'*' == filterKey ? "active-link" : ""} onClick={() => {handleFilterKeyChange('*')}}>All</li>
            <li class={'ope' == filterKey ? "active-link" : ""} onClick={() => {handleFilterKeyChange('ope')}}>Evaluation</li>
            <li class={'cpl' == filterKey ? "active-link" : ""} onClick={() => {handleFilterKeyChange('cpl')}}>Learning</li>
          </ul>
        </div>
      </div>

      <div class="container">
      
        {projects.map(project => (
           filterKey === "*" || project.frontmatter.category.includes(filterKey) ? 
           <div class={"filter-item ".concat(project.frontmatter.category.map(category => category).join(' '))} > {/* style={{"display":"flex", "flexDirection":"row", "paddingBottom": "10px"}} */}
           <div class="portfolio-wrap">
              <div style={{"maxWidth":"300px", "objectFit":"scale-down"}}>
              {!project.frontmatter.image_or_movie.endsWith('.mov') && <img src={project.frontmatter.image_or_movie} class="img-fluid" alt="" style={{"border": "4px solid #1f5297" }} onLoad={() => setLoaded(true)}></img>}  {/* {loaded ? {} : { "display": 'none' }} */}
              {project.frontmatter.image_or_movie.endsWith('.mov') && <video autoPlay muted loop={true} style={{"border": "4px solid #1f5297" }}><source src={project.frontmatter.image_or_movie} ></source></video>}
              </div>
             <div class="portfolio-links" style={{"maxWidth":"300px"}}>
              <a href={project.frontmatter.pdf} title="PDF"><i class="bx bx-file-blank" style={{"fontSize": "20px"}}> PDF</i></a>
              <a onClick={() => {toggleModal(project.frontmatter.title)}} title="Cite"><i class="bx bx-link" style={{"fontSize": "20px"}}> Cite</i></a>
              <a href={project.frontmatter.official_link} target="_blank" title="Details"><i class="bx bx-link-external" style={{"fontSize": "20px"}}> Details</i></a>
             </div>
             </div>
             <div class="col" style={{"paddingLeft": "50px"}}>
              <div class="portfolio-link-title" >
              {project.frontmatter.title}
              </div>
              <div class="portfolio-link-author" >{project.frontmatter.authors}</div>
              {/* { showAbstract && (whichAbstract === project.frontmatter.title) ?  <div style={{"fontSize": "14px"}}>{project.frontmatter.abstract}</div> : null } */}
              {/* <button  class="button-34"  onClick={() => {toggleAbstract(project.frontmatter.title)}}>
                {showAbstract && (whichAbstract === project.frontmatter.title) ? "Close" : "Abstract"}
                </button> */}
              </div>
           { openTitle === project.frontmatter.title ? 
           <div>
           <Modal
              isOpen={isOpen}
              onRequestClose={() => {toggleModal("")}}
              contentLabel="My dialog"
              className="mymodal"
              overlayClassName="myoverlay"
              ariaHideApp={false}
              closeTimeoutMS={500}
            >
              <div>
                {project.frontmatter.bibtex}
                {console.log(project.frontmatter.title)}
              </div>
              <button class="button" onClick={toggleModal}>Close</button>
            </Modal>
            
            </div> : "" }
         </div>
         :
         ""
          ))}
        
      </div>

    </div>
  </section>
  
  )
}

export default Research