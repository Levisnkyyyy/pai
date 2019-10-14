import React, {useEffect, useState, useRef, useContext} from 'react';
import {TweenMax} from "gsap/TweenMax";
import {Link} from 'gatsby';
import infodata from '../json/tabs.json';
import {LocContext} from '../pages/index';
// FIX SCROLL TO ON BUILD VERSIONf

/*
    componentDidMount() {
        if(this.state.selected === 0) {
            this.fetchService(this.props.type, 0);
        }
    }
    fetchService = (type, index) => {
        
            if(type === 'houses') {
                console.log('houses');
                this.setState({data: infodata.house});
                this.setState({selected: index});
            } else if(type === 'cars')
            {
                this.setState({data: infodata.car});
                this.setState({selected: index});
            }
       
    }
    handleClick = (title,btext)=> {
        this.setState({selected: title});
        var textelm = document.getElementById(this.props.type).getElementsByTagName('pre')[0];
        TweenMax.to(textelm, 0.4, {opacity: 0, onComplete: ()=> {
            this.setState({text: btext});
            TweenMax.to(textelm, 0.4, {opacity: 1});
        }});
        if(touch())
        {
            TweenMax.to(window, 0.5, {scrollTo: this.elmId});
        }
    }
    */

    /*
export class Servic2e extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            data: [],
            selected: {
                title: "no",
                text: "no"
            }
        };

        this.textElm = React.createRef();
        this.mainElm = React.createRef();
        this.tween = null;
      //  this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
       console.log('mount');
        if(this.state.data.length === 0)
        {
            let tempdata = [];
            if(this.props.type === 'houses') {
                this.setState({data: infodata.house});
                tempdata = infodata.house;
            }
            else {
                this.setState({data: infodata.car});
                tempdata = infodata.car;
            }
            this.setState({selected: {
                title: tempdata[parseInt(this.state.index)].title,
                text: tempdata[parseInt(this.state.index)].text
            }});
        }
    }
    componentDidUpdate(prevProps, prevState) {

       if (this.state.index !== this.props.selected && prevProps !== this.props) {
            this.changeViewTo(this.props.selected);
        }
      }
    changeViewTo = (index) => {
        let title = this.state.data[index].title;
        let text = this.state.data[index].text;
        this.setState({index: index});
        
        this.tween = TweenMax.to(this.textElm.current, 0.4, {opacity: 0, onComplete: ()=> {
            this.setState({selected: {
                title: title,
                text: text
            }});
             TweenMax.to(this.textElm.current, 0.4, {opacity: 1});
        }});
        if(touch())
        {
            this.tween = TweenMax.to(window, 0.5, {scrollTo: this.mainElm.current});
        }
    }
      handleClick = (index) => {
            this.changeViewTo(index);
      }
    render() {
        const content =
            <div className="container" ref={this.mainElm}>
                <div className="right-container">
                    <label>{this.props.label}</label>
                    <h2>{this.state.selected.title}</h2>
                    <pre ref={this.textElm}>
                        {this.state.selected.text}
                    </pre>
                </div>
                <div className="tabs-container">
                    <div className="columns tabs">
                        {this.state.data.map((info, index) =>
                            <Tab 
                            info={info} 
                            key={info.title} 
                            selected={(index === this.state.index) ? 'true' : 'false'}
                            onClick={()=> this.handleClick(index)} />
                        )}
                    </div>
                </div>
            </div>;
        return content;
    }

}*/

function usePrevious(value) {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef();
    // Store current value in ref
    useEffect(() => {
  
      ref.current = value;
  
    }, [value]); // Only re-run if value changes
    // Return previous value (happens before update in useEffect above)
    return ref.current;
  
  }

const Service = ({type, label, selected}) => {
    const loccon = useContext(LocContext);
    const [index, setIndex] = useState(0);
    const [data, setData] = useState([]);
    let textElm = useRef(null);
    const prevSelected = usePrevious(selected);
    let tween = useRef(null);
    useEffect(()=> {
        if(data.length === 0) {
            if(type === 'houses') {
                setData(infodata.house);
            } else {
                setData(infodata.car);
            }
            setIndex(0);
        } else {
            if(selected !== prevSelected) {
                 setIndex(selected);
                 return;
             }

            try {
                tween = TweenMax.fromTo(textElm.current, 0.7, {opacity: '0'}, {opacity: '1'});
            } catch(e) {
    
            }
        }


    });
    return             <div className="container">
    <div className="right-container">
        <label>{label}</label>
        <h2>{(data.length !== 0) ? data[index].title : ''}</h2>
        <pre id={type+"pre"} ref={textElm}>
        {(data.length !== 0) ? data[index].text : ''}
        </pre>
    </div>
    <div className="tabs-container">
        <div className="columns tabs">
            {data.map((info, i) =>
                <Tab 
                info={info} 
                key={info.title} 
                selected={(i === index) ? 'true' : 'false'}
                onClick={()=>setIndex(i)} />
            )}
        </div>
    </div>
</div>;
}
export default Service;

class Tab extends React.Component {
    render() {
        let info = this.props.info;
        const content =
            <div className="column is-2">
                <div onClick={this.props.onClick} className={(this.props.selected === 'true') ? 'tab selected' : 'tab'}>
                    <img src={info.image} alt={info.title} />
                    <p>{info.title}</p>
                    <i className="icofont-arrow-left"></i>
                </div>
            </div>;
        return content;
    }

}

export class NavbarServices extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick(type, ind) {
         this.props.navbarServiceClick(type, ind);
    }
    render() {
        const content = 
        <div className="servicesmenu">
            <div className="titles columns">
                <div className="column">בית</div>
                <div className="column">רכב</div>
            </div>
            <ul>
                {infodata.house.map((house, index) => 
                    <li key={house.title}>
                        <Link to={'/#houses'}>
                        <div className="contain" onClick={()=>this.handleClick('houses',index)}>
                            <div className="image"><img src={house.image} alt={house.title} /></div>
                            <div className="text">{house.title}</div>
                        </div>
                        </Link>
                    </li>
                )}
            </ul>
            <ul>
                {infodata.car.map((car, index) => 
                    <li key={car.title}>
                        <Link to="/#cars">
                        <div className="contain" onClick={()=>this.handleClick('cars', index)}>
                        <div className="image"><img src={car.image} alt={car.title} /></div>
                        <div className="text">{car.title}</div></div>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
        ;
        return content;
    }
}
