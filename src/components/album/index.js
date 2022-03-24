import React from "react";
import "./index.css";

const Album = ({ album, artists }) => {
    return(
        <div className='shortCard'>
                <picture className='shortCard-image'>
                    <source 
                        media={`(min-width: ${album.images[0].width})`}
                        srcSet={ album.images[0].url }
                    />
                    <source 
                        media={`(min-width: ${album.images[1].width})`}
                        srcSet={ album.images[1].url }
                    />
                    <source     
                        media={`(min-width: ${album.images[2].width})`}
                        srcSet={ album.images[2].url }
                    />
                    <img src={ album.images[1].url } alt='' />
                </picture>
                <div className='shortCard-desc'>
                    <p>Album</p>
                    <h2>{ album.name }</h2>
                    <h4>{ artists[0].name }</h4>
                </div>
                <button className='btn btn-select'>Select</button>
            </div>
    );
};

export default Album;