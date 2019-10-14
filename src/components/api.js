import axios from 'axios';
import React, {useState, useEffect} from 'react';

const DisplayMessages = () => {
  const [data, setData] = useState([]);
  useEffect(()=> {
    if(data.length === 0) {
      axios.get("http://localhost:8080/newcontact.php?get=posts")
      .then((dat) => {
        setData(dat.data);
      });
    }
  });
  return <table className="msgtable">
    <thead>
      <td>שם</td>
      <td>שם משפחה</td>
      <td>טלפון</td>
      <td>תאריך</td>
    </thead>
    <tbody>
      {data.map((post) => 
        <tr>
          <td>{post.firstName}</td>
          <td>{post.lastName}</td>
          <td>{post.mobile}</td>
          <td>{post.date}</td>
        </tr>
      )}
    </tbody>
  </table>;
}
export default DisplayMessages;


export class GetQuoteComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      phone: null,
      sent: false
    }
  }
  priceQuote = event => {
    event.preventDefault();
    var bodyData = new FormData();
    bodyData.set('firstName', this.state.firstName);
    bodyData.set('lastName', this.state.lastName);
    bodyData.set('mobile', this.state.phone);
  //  alert(this.state.firstName);
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };
      axios.post('http://localhost:8080/newcontact.php', bodyData, axiosConfig
    )
    .then(res => {
      this.setState({sent: true}); 
      console.log(res);
    }).catch(err=> {
      alert(err);
    })
  }
  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
  render() {
    return   <section id="quote">
    <div className="container">
      <div className="quote-text">
        <h3>בואו לקבל שירות ברמה הכי גבוהה בתחום</h3>
         <p>אנו מספקים שירותים לבתים פרטיים, בעלי עסקים, ורכבים משלל הסוגים</p>
      </div>
      <div className="contactform">
        <div className="contactform-container">
          {this.state.sent === true &&
          <>
            <label className="success">
              תודה!<br />
              פנייתך התקבלה
            </label>
          </>
          }
          {this.state.sent === false &&
          <>
          <h4>פנה אלינו להצעת מחיר</h4>
          <p>נחזור אליך תוך 24 שעות</p>
          <form onSubmit={this.priceQuote}>
            <input type="text" name="firstName" onChange={this.handleInputChange} placeholder="שם" />
            <input type="text" name="lastName" onChange={this.handleInputChange} placeholder="שם משפחה" />
            <input type="text" name="phone" onChange={this.handleInputChange} placeholder="מספר פלאפון" />
            <input type="submit" className="btn" value="שלח" />
          </form>
          </>
          }
        </div>
      </div>
    </div>
  </section>
  }
}

  


