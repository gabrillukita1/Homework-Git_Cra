import React from "react";
import './album.css';

const Desc = ({ album, title, artists }) => {
    return (
        <div className='shortCard-desc'>
            <p>Album: { album.name }</p>
            <h2>{title}</h2>
            <h4>{artists[0].name}</h4>
        </div>
    );
};

export default Desc;