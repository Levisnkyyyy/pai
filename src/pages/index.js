import React from "react"
import Service, {Servic2e} from "../components/sections/services";
import Layout from "../components/layout"
import SEO from "../components/utilities/seo"
import slideshow from "../img/slideshow.jpeg"
import whyusman from "../img/whyusmancut.png";
import Infokey from '../components/sections/infokeys';
import Faq from '../components/sections/faq';
import {Quote} from '../components/sections/quote';
import {Link} from 'gatsby';

export const LocContext = React.createContext({});



 // להוסיף טלפון עסק
class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceshouse: 0,
      servicescar: 0,
    }
  }
  changeService = (service, index) => {
    if(service === 'houses') {
      this.setState({serviceshouse: index});
    } else {
      this.setState({servicescar: index});
    }
  }

  render() {
    return   <LocContext.Provider value={this.props.location}>
      <Layout page="home" navbarServiceClick={this.changeService}>
    <SEO title="פאי פתרונות אסתטיקה יחודיים" />
    <section id="aboutus">
    <div className="container">
      <div className="columns">
        <div className="column is-two-fifths">
          <div className="info">
            <hr />
            <label>ברוכים הבאים</label>
            <h2>לחברת פאי - פתרונות אסתטיקה יחודיים</h2>
            <p className="bold" style={{fontSize: '1.1rem'}}>
            אנו חברה המתמחה בניקוי ספות ומוצרי טקסטיל בבית וברכב בשיטות מיוחדות באמצעות חומרים מתקדמים בתקן אמריקאי.              </p>
            <p style={{marginTop: '7px'}}>
            עבודה יסודית על ידי אנשי המקצוע של פאי תעניק לכם תחושה חדשה למוצרי הטקסטיל שלכם. לרשותנו עומד מכשור מהמתקדמים בתחום, עם ציוד ניקיון מחומרים אורגניים וידידותיים לסביבה, בעלי חיים, ופעוטות. עם הצוות המקצועי שלנו, נגיע יחד לתוצאות מדהימות עם התחייבות מלאה לשביעות רצונכם.              </p>
            <img src={slideshow} alt="ניקוי ספות פאי" />
          </div>
        </div>
        <div className="column is-three-fifths">
          <div className="info-keys">
            <div className="chevrons">
              <i className="icofont-curved-left icofont-2x"></i>
            </div>
            <div className="columns">
                <Infokey />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    <section id="houses" className="service-section">
        <Service type="houses" label="ספות ומוצרי טקסטיל" selected={this.state.serviceshouse} />
      </section>
      <section id="cars" className="service-section">
      <Service type="cars" label="רכב ואביזרים" selected={this.state.servicescar} />
    </section> 

  <section id="whyus">
    <div className="container">
      <div className="right-container">
        <h2 className="title">למה אנחנו?</h2>
        <div className="columns whyus-keys">
          <div className="column">
            <h3 className="keytitle"><i className="icofont-ui-check"></i> אמינות זה אנחנו</h3>
            <p>
                אנו מאמינים בשקיפות מלאה מול הלקוח. נשתף אתכם בכל תהליך הניקוי, ונעזור לכם גם אחריו. עובדי החברה הינם אנשים אמינים ומקצועיים, מוסמכים במיוחד לניקיון הבית והרכב.
            </p>
          </div>
          <div className="column">
            <h3 className="keytitle"><i className="icofont-ui-check"></i> שירות ישר ומקצועי</h3>
            <p>
                יש ברשותינו את המכונות הכי חדישות כיום, עם צוות עובדים מקצועי במיוחד! עובדי החברה עוברים הסמכה מקצועית בתחום ניקיון הבית והרכב ומספקים שירות מקצועי ואדיב.
            </p>
          </div>
          <div className="column">
            <h3 className="keytitle"><i className="icofont-ui-check"></i> מחירים נוחים</h3>
            <p>
            אנו מאמינים במתן שירות מעל למצופה, ושאיפתנו היא ליצור אופציה זמינה וזולה לניקוי מוצרי הטקסטיל בבית וברכב. כמו כן, מחירנו הם בין הזולים בשוק!
            </p>
          </div>
        </div>
      </div>
      <div className="rest-container is-hidden-touch">
        <img src={whyusman} alt="למה אנחנו" />
      </div>
      <div className="bottombar">
        <div className="bar-container">
          <div className="columns">
            <div className="column is-9">
              <h4>התקשרו עכשיו לקבל הצעת מחיר</h4>
              
            </div>
            <div className="column is-3">
              <Link to="/#quote"><button className="btn">קבלו הצעת מחיר</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
  <Faq />
  <Quote />


  </Layout></LocContext.Provider>
  }
}

export default IndexPage
