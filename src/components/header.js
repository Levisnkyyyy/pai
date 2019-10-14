import { Link } from "gatsby"
import React from "react"
import logo from "../img/logo.png";
import {NavbarServices} from './services';
//import { TweenMax, TimelineMax} from "gsap/all";
/*
import ScrollMagic from "scrollmagic";
import {desktop} from "./functions";

*/
/*
var controller = new ScrollMagic.Controller();
if (desktop()) {
    var navbar_scene = new ScrollMagic.Scene({
        triggerElement: "#header",
        offset: 5,
        triggerHook: 0
    })
     //   .addIndicators()
        .addTo(controller); // assign the scene to the controller

    navbar_scene.on("enter", function (event) {
        new TimelineMax().to(".navbar", 0.7, { height: "80px" })
            .to(".navbar .columns.links>.column", 0.7, { css: { 'line-height': '75px' } }, 0)
            .to(".navbar .logo img", 0.7, { height: '70px' }, 0);

    });
    navbar_scene.on("leave", function (event) {
        new TimelineMax().to(".navbar", 0.7, { height: "110px" })
            .to(".navbar .columns.links>.column", 0.7, { css: { 'line-height': '105px' } }, 0)
            .to(".navbar .logo img", 0.7, { height: '80px' }, 0);
    });
}
*/



class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverServices: false
    }
    this.navServices = React.createRef();
  }
  toggleServicesView = () => {
    console.log('toggled');
    if(this.state.hoverServices === false)
    {
      this.setState({hoverServices: true});
    //  TweenMax.to(this.navServices.current, 0.6, {height: '370px'});
    } else {
      this.setState({hoverServices: false});
 //     TweenMax.to(this.navServices.current, 0.5, {height: '0'});
    }
    
  }
  render() {
    let headerClass = "header";
    if (this.props.page !== 'home') {
      headerClass += " pricing";
    }  
    let servicesView = "navbar_services";
    if(this.state.hoverServices === true) {
      servicesView = "navbar_services active";
    } else {
      servicesView = "navbar_services";
    }
    return (
      <header id="header" className={headerClass}>
        <nav className="navbar">
          <div className="container">
            <div className="columns links">
              <div className="column logo">
                <Link to="/">
                  <img src={logo} alt="פאי פתרונות נקיון אסתטיים" />
                  </Link>
              </div>
                <div className="column">
                <Link to="/">דף הבית</Link>
                </div>
                <div className="column" onMouseLeave={this.toggleServicesView} onMouseEnter={this.toggleServicesView}>
                  <Link to="/#houses" className="ourservices">שירותים שלנו <i className="icofont-caret-down"></i></Link>
                  <div className={servicesView} ref={this.navServices}>
                    <NavbarServices navbarServiceClick={this.props.navbarServiceClick} />
                  </div>
                </div>
                <div className="column">
                  <Link to="/pricing">מחירון</Link>
                </div>
                <div className="column fortouch is-hidden-desktop">
                  <div className="circle blue tel">
                    <a href="tel:0538585580"><i className="icofont-phone"></i></a>
                  </div>
    
                </div>
                <div className="column pricebtn">
                  <Link to="/#quote"><button className="btn getquote"><i className="icofont-price"></i> קבל/י הצעת מחיר</button></Link>
                </div>
                <div className="column phone">
                <a href="tel:0538585580"><i className="icofont-phone"></i> 053-858-5580</a>
                <label className="available">זמינים עכשיו!</label>
                </div>
    
              </div>
            </div>
        </nav>
        {this.props.page === 'pricing' &&
        <>
      <div className="maincontent">
        <div className="container">
        <h1 className="title">מחירון שירות</h1>
        </div>
      </div>
        </>
        }



        {this.props.page === 'home' &&
        <>
        <div className="maincontent">
      <div className="container">
        <h1 className="title">פתרונות נקיון אסתטיים לבית ולרכב</h1>
        <label className="subtitle">החברה המובילה בצפון לניקוי מגוון מוצרי הטקסטיל לבית ולרכב</label>
        <ul className="keypoints">
          <li><i className="icofont-leaf"></i> שימוש בחומרים ירוקים וידידותיים לסביבה</li>
          <li><i className="icofont-leaf"></i> התחייבות מלאה, לא ניקינו - לא שילמת</li>
          <li><i className="icofont-leaf"></i> שירות מקצועי עם צוות מוסמך ובטוח</li>
          <li><i className="icofont-leaf"></i> מחירים נוחים לכל כיס</li>
        </ul>
      </div>
    </div>
    
    
        <div className="bottombar is-hidden-touch">
          <div className="columns bottombar-container">
            <div className="column info is-one-third">
              <div className="columns bottombar-in">
                <div className="column image">
                  <i className="icofont-phone"></i>
                </div>
                <div className="column text">
                  <label>צרו איתנו קשר</label>
                  <a href="tel:0538585580"><p style={{direction: 'ltr'}}>053 - 858 - 5580</p></a>
                </div>
              </div>
            </div>
            <div className="column info is-one-third is-hidden-mobile">
              <div className="columns bottombar-in">
                <div className="column image">
                  <i className="icofont-location-pin"></i>
                </div>
                <div className="column text">
                  <label>איפה אנחנו נמצאים</label>
                  <a href="https://www.google.com/maps?q=%D7%94%D7%9E%D7%A7%D7%9C%D7%A3+22+%D7%97%D7%99%D7%A4%D7%94"><p>המקלף 22, חיפה</p></a>
                </div>
              </div>
            </div>
            <div className="column info is-one-third is-hidden-mobile">
              <div className="columns bottombar-in">
                <div className="column image">
                  <i className="icofont-clock-time"></i>
                </div>
                <div className="column text">
                  <label>שעות פעילות</label>
                  <p>א-ה 8:00-20:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
        }
    
      </header>);
  }
}



  export default Header
