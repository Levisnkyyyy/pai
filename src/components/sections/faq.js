import React from 'react';
import faqdata from '../../json/faq.json';

class Faq extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: null
        }
    }
    handleClick = (index)=> {
        if(this.state.active === index)
        {
            this.setState({active: null});
        } else {
            this.setState({active: index});
        }
        
     // alert(index);
    }
    render() {
        return   <section id="faq">
        <div className="container">
          <h2 className="title">שאלות ותשובות</h2>
          <div className="faq_container">
            <ul>
                {faqdata.questions.map((info, index) =>
                    <li onClick={()=> this.handleClick(index)} className={(index === this.state.active) ? 'active' : ''} key={index}>
                        <i className="icofont-rounded-down"></i>
                        <div className="question">{info.question}</div>
                        <div className="answer">{info.answer}</div>
                    </li>
                )}
            </ul>
          </div>
        </div>
      </section>
    }
}
export default Faq;