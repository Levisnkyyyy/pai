import { Link } from "gatsby"
import React from "react"
import facebook from "../img/facebook.png";
import whatsapp from "../img/whatsapp.png";
import logo from "../img/logo.png";

const Footer = () => {
    return <><footer id="footer">
    <div className="container footer">
      <div className="columns">
        <div className="column is-4">
          <div className="footer-logo">
            <img src={logo} alt="פאי פתרונות נקיון אסטתיים" />
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/paiclean/"><img src={facebook} alt="צור קשר פייסבוק" /></a>
            <a href="https://wa.me/+972538585580"><img src={whatsapp} alt="צור קשר ווטצאפ" /></a>
          </div>
        </div>
        <div className="column is-3 footer-links">
          <span>ניווט מהיר</span>
          <ul>
            <li><Link to="/">ראשי</Link></li>
            <li><Link to="/#aboutus">עלינו</Link></li>
            <li><Link to="/#houses">שירותים לבית</Link></li>
            <li><Link to="/#cars">שירותים לרכב</Link></li>
            <li><Link to="/#whyus">למה אנחנו</Link></li>
            <li><Link to="/#faq">שאלות ותשובות</Link></li>
            <li><Link to="/pricing">מחירון</Link></li>
          </ul>
        </div>
        <div className="column is-5 footer-info">
          <div className="table">
          <a href="tel:0538585580"><div className="tr phone">
              <div className="image"><i className="icofont-phone"></i></div>
              <div className="label">טלפון</div>
              <div className="text" style={{direction: 'ltr'}}>053 - 858 - 5580</div>
            </div></a>
            <a href="https://www.google.com/maps?q=%D7%94%D7%9E%D7%A7%D7%9C%D7%A3+22+%D7%97%D7%99%D7%A4%D7%94"><div className="tr clock">
                <div className="image"><i className="icofont-location-pin"></i></div>
                <div className="label">כתובת</div>
                <div className="text">המקלף 22 חיפה</div>
            </div></a>
            <a><div className="tr location">
                <div className="image"><i className="icofont-clock-time"></i></div>
                <div className="label">שעות פעילות</div>
                <div className="text">א-ה 8:00-20:00</div>
              </div></a>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        כל הזכויות שמורות © 2019 פאי
        <br />
        <a href="http://benlevi.me">בן לוי בניית אתרים</a>
      </div>
    </div>
  </footer>
  <a href="https://wa.me/+972538585580">
  <div className="wafloat">
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      viewBox="0 0 58 58">
      <g>
        <path style={{fill: 'rgb(105, 204, 29)'}} d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5
          S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z" />
        <path className="phone" style={{fill:"#fff"}} d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42
          c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242
          c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169
          c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097
          c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z" />
      </g>
    </svg>
  </div>
  </a>
  </>
}
export default Footer