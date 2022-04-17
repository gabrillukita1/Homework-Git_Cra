import React from "react";
import './album.css';
interface DescProps{album:{name:string}, title:string, artists:{name:string}[]};

const Desc = ({ album, title, artists }:DescProps) => {
    return (
        <div className='shortCard-desc'>
            <p>Album: { album.name }</p>
            <h2>{title}</h2>
            <h4>{artists[0].name}</h4>
        </div>
    );
};

export default Desc;