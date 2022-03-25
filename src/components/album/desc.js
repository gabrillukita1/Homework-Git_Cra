import React from "react";
import './album.css';

const Desc = ({ album, artists }) => {
    return (
        <div className='shortCard-desc'>
            <p>Album</p>
            <h2>{album.name}</h2>
            <h4>{artists[0].name}</h4>
        </div>
    );
};

export default Desc;