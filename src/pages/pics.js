import React, {Component, useState} from "react";
import Layout from "../components/layout";
import SEO from "../components/utilities/seo";
import pics from "../json/pics";




const PicsPage = ({location}) => {
    const [image, setImage] = useState({src: '', alt: ''});
    const [fullImageView, setView] = useState(false);
    const openImage = (obj) => {
        setImage(obj);
        setView(true);
    }
    return <Layout page="לפני ואחרי">
        <SEO title="לפני ואחרי" />
        <div className={"full-image"+(fullImageView ? ' active' : '')} onClick={()=>setView(false)}>
        <i className="icofont-close-circled"></i>
            <img src={"/img/beforeafter/"+image.src} alt={image.alt} />
        </div>
        <div className={'overlay' + (fullImageView ? ' dim' : '')}></div>
        <div className="container" onClick={()=> fullImageView === true ? setView(false) : null}>
            <div className="image-table columns">
                {pics.map(pic=> 
                     pic.images.map(img=>
                        <div key={img} className="image-cell column is-2">
                            <img src={"/img/beforeafter/"+img} alt={pics.service} onClick={()=>openImage({src: img, alt: pics.service})} />
                        </div>
                    )
                )}
            </div>
        </div>
        </Layout>
}
export default PicsPage;