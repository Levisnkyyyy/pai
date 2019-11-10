import React, {useEffect, useState, useRef, useContext} from 'react';
import {TweenMax} from "gsap/TweenMax";
import {Link} from 'gatsby';
import infodata from '../../json/tabs.json';
import pics from '../../json/pics.json';
import {LocContext} from '../../pages/index';
// FIX SCROLL TO ON BUILD VERSIONf
import Slideshow from "../slideshow";

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]); 
    return ref.current;
  
  }

const Service = ({type, label, selected}) => {
    const loccon = useContext(LocContext);
    const [index, setIndex] = useState(0);
    const [data, setData] = useState([]);
    let textElm = useRef(null);
    const prevSelected = usePrevious(selected);
    let tween = useRef(null);
    const [slideshow,setSlideshow] = useState([]);
    const [slideshowLabel, setLabel] = useState("לפני ואחרי");
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
            let found = pics.find((e) => (e.service === data[index].title));
            if(found !== undefined) {
                setSlideshow(found.slideshow);
                if(found.label !== undefined) {
                    setLabel(found.label);
                }
            } else {
                if(slideshow.length !== 0) {
                    setSlideshow([]);
                }
            }
        }
        
        
        

    });
    return   <>   
           
    <div className="container">
    <div className="right-container">
        <label>{label}</label>
        <h2>{(data.length !== 0) ? data[index].title : ''}</h2>
        <pre id={type+"pre"} ref={textElm}>
        {(data.length !== 0) ? data[index].text : ''}
        </pre>
    </div>
    
    {slideshow.length !== 0 &&
    <>
    
    <div className="slideshow-container">
    
        <Slideshow images={slideshow} label={slideshowLabel} />
        </div>


        </>
    }
    
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
</div>

</>;
}
export default Service;

export class Tab extends React.Component {
    render() {
        let info = this.props.info;
        const content =
            <div className="column">
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
         if(this.props.navbarServiceClick !== undefined)
         {
            this.props.navbarServiceClick(type, ind);
         }
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
