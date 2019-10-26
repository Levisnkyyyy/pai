/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState} from "react";
import Header from "./sections/header";
import Footer from "./sections/footer";
import "../css/ben.scss";
import "../css/main.scss";
import "../css/icofont.min.css";


const Layout = ({ children, page, navbarServiceClick }) => {
  const [mobileMenu, setMenu] = useState(false);
  const clickedPage = () => {
    if(mobileMenu === false) {
      setMenu(true);
    setTimeout(()=> { setMenu(false); }, 500);
    }
  }
  return (
    <>
      <Header page={page} navbarServiceClick={navbarServiceClick} clickedPage={clickedPage} mobileMenu={mobileMenu} />
      <div onClick={()=> clickedPage()}
      >
        
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}



export default Layout
