import React from 'react';
import info_keys from '../json/infokeys.json';


const Infokey = () => (
    info_keys.keys.map((info) =>
    <div className="column is-half" key={info.title.toString()}>
    <div className="key columns">
        <div className="image column">
            <img src={info.image} alt={info.title} />
        </div>
        <div className="text column">
            <h3>{info.title}</h3>
            <p>{info.text}</p>
        </div>
    </div>
</div>
    )
)

export default Infokey;