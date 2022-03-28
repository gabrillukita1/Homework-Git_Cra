import React from "react";
import "./album.css";
import Image from "./image";
import Desc from "./desc";

const AlbumItems = ({ album, artists }) => {
    return (
        <div className='shortCard'>
            <Image album={album} />
            <Desc album={album} artists={artists} />
            <button className='btn btn-select'>Select</button>
        </div>
    );
};

// Album Wrapper
const Album = ({ musics }) => {
    return (
        <div className="album-wrapper">
            {musics.map(({ id, album, artists }) => (
                <AlbumItems key={id} album={album} artists={artists} />
            ))}
        </div>
    );
};

export default Album;