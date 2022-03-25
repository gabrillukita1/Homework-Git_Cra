import React from "react";
import "./album.css";
import Image from "./image";
import Desc from "./desc";

const Album = ({ album, artists }) => {
    return (
        <div className='shortCard'>
            <Image album={album} />
            <Desc album={album} artists={artists} />
            <button className='btn btn-select'>Select</button>
        </div>
    );
};

export default Album;