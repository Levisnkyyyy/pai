import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slideshow = ({ images, label }) => {

    return <>
    <h4 className="beforeafter">{label}</h4>
    <div className="slideshow">
        <Carousel autoPlay={true} showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop={true}>
            {images.map((sl, index) =>
                <div>
                    <img src={"/img/beforeafter/slideshow/" + sl} className={"slideshow-image-" + index} />
                   
                </div>
            )}

        </Carousel>


    </div></>
}
export default Slideshow;        