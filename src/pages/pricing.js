import React from "react"
import { Redirect } from "@reach/router";
import Layout from "../components/layout"
import SEO from "../components/seo"
import infodata from '../json/tabs.json';

class PricingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount(){
    if(this.props.type === 'houses')
    {
      this.setState({data: infodata.house});
    }
     else {
       this.setState({data: infodata.car});
     }
  }
  render() {
    const content = <>
    <div className="columns pricingcolumns">
      {this.state.data.map((info, index) =>
        
        <div className="column is-4" key={index}>
          <div className="service_price">
            <div className="service_price-info">
              <img src={'../'+info.image} alt={info.title} />
              <h3>{info.title}</h3>
            </div>
            <div className="service_price-pricing">
              {info.pricing.map((pricetag, inde2x) =>
                <div className="service_price-pricing-line" key={inde2x}>
                  <div className="right">
                    {pricetag.title}
                  </div>
                  <div className="left">
                  ₪{pricetag.price}
                    </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        )}
    </div>
    </>
    return content;
    }
}

class PricingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: null
    }
  }
  changeService = (service,index)=> {
    if(service === 'houses') {
     // this.setState({redirectTo: '/#houses'});
    }
     else {
    //   this.setState({redirectTo: '/#cars'});
     }
  }
  render() {
    if(this.state.redirectTo != null) {
      return <Redirect to={this.state.redirectTo} />
    }
    return   <Layout page="pricing" navbarServiceClick={this.changeService}>
    <SEO title="מחירון" />
    <div className="container pricepage">
      <h2 className="title">ספות ומוצרי טקסטיל</h2>
      <PricingContainer type="houses" />
      <h2 className="title cars">רכב ואביזרים</h2>
      <PricingContainer type="cars" />
      <div style={{marginTop: '80px'}}>
        <ul>
          <li> * כל המחירים ללא מע"מ</li>
          <li> * המחיר עשוי להשתנות במידה והפריט לניקוי לא עומד בקריטריון המתאים</li>
        </ul>
      </div>
    </div>
  </Layout>
  }
}


export default PricingPage
