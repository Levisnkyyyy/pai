import React, { Component, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/utilities/seo";
import pics from "../json/pics";
import infodata from '../json/tabs.json';



const PicsPage = ({ location }) => {
    const [image, setImage] = useState({ src: '', alt: '' });
    const [fullImageView, setView] = useState(false);
    const [sortMenu, setSortMenu] = useState(false);
    const [sort, setSort] = useState('');
    const openImage = (obj) => {
        setImage(obj);
        setView(true);
    }
    return <Layout page="לפני ואחרי">
        <SEO title="לפני ואחרי" />
        <div className={"full-image" + (fullImageView ? ' active' : '')} onClick={() => setView(false)}>
            <i className="icofont-close-circled"></i>
            <img src={"/img/beforeafter/" + image.src} alt={image.alt} />
        </div>
        <div className={'overlay' + (fullImageView ? ' dim' : '')}></div>
        <div className="container" onClick={() => fullImageView === true ? setView(false) : null}>
            <div className={"sort " + (sortMenu ? 'active' : '')}>
                <div className="sort-info">
                    <span class="title" onClick={() => setSortMenu(!sortMenu)}>סנן לפי שירות</span> <i className="icofont-arrow-down"></i>
                    <br />
                    {sort !== '' &&
                    <span class="showall" onClick={()=> setSort('')}>הצג הכל</span>
                    }
                </div>
                <div className="sort-service">
                    <h3>בית</h3>
                    <div className="sort-columns">
                        {infodata.house.map(sr =>
                            <div className="sort-column" onClick={() => setSort(sr.title)}>
                                <img src={"/" + sr.image} />
                                <label style={{fontWeight: (sort === sr.title ? '600' : '400')}}>{sr.title}</label>
                            </div>
                        )}
                    </div>
                </div>
                <div className="sort-service">
                    <h3>רכב</h3>
                    {infodata.car.map(sr =>
                        <div className="sort-column" onClick={() => setSort(sr.title)}>
                            <img src={"/" + sr.image} />
                            <label style={{fontWeight: (sort === sr.title ? '600' : '400')}}>{sr.title}</label>
                        </div>
                    )}
                </div>
            </div>
            <div className="image-table columns">
                {sort === '' &&
                    pics.map(pic =>
                        pic.images.map((img,index) =>
                            (index < 20 &&
                            <div key={img} className="image-cell column is-2">
                                <img src={"/img/beforeafter/" + img} alt={pics.service} onClick={() => openImage({ src: img, alt: pics.service })} />
                        </div> )
                        )
                    )
                }
                {sort !== '' &&
                    (pics.find(e=> e.service === sort) !== undefined &&
                        pics.find(e=> e.service === sort).images.map(img =>
                            <div key={img} className="image-cell column is-2">
                            <img src={"/img/beforeafter/" + img} alt={pics.service} onClick={() => openImage({ src: img, alt: pics.service })} />
                        </div>
                        )
                    ) || (pics.find(e=> e.service === sort) === undefined && sort !== '' &&
                        <p class="sorry">מצטערים, עדיין אין תמונות לשירות הנבחר</p>
                    )
                }
            </div>
        </div>
    </Layout>
}
export default PicsPage;