import React from "react"
import { useState } from "react"
import Layout from "../components/Layout"
import '../styles/bootstrap-icons.css'

export default function Hobbies() {

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
    <section id="hobbies" class="portfolio section-bg">
    <div class="container">

      <div class="section-title">
        <h2>Hobbies</h2>
        {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
      </div>


      <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <img src="./portfolio/portfolio-1.jpg" class="img-fluid" alt=""></img>
            {/* <div class="portfolio-links">
              <a href="./portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
            </div> */}
          </div>
        </div>

      </div>

    </div>
  </section>
  )
}
