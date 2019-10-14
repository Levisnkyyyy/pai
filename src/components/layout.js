/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../css/ben.scss";
import "../css/main.scss";
import "../css/icofont.min.css";


const Layout = ({ children, page, navbarServiceClick }) => {

  return (
    <>
      <Header page={page} navbarServiceClick={navbarServiceClick} />
      <div
      >
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}



export default Layout
