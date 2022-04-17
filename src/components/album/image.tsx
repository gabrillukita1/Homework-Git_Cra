import React from "react";
import './album.css';
interface ImageProps {
    album:
    {
        images: {
            width: number;
            url: string
        }[]
    }
}

const Image = ({ album }:ImageProps) => {
    return (
        <picture className='shortCard-image'>
            <source
                media={`(min-width: ${album.images[0].width})`}
                srcSet={album.images[0].url}
            />
            <source
                media={`(min-width: ${album.images[1].width})`}
                srcSet={album.images[1].url}
            />
            <source
                media={`(min-width: ${album.images[2].width})`}
                srcSet={album.images[2].url}
            />
            <img src={album.images[1].url} alt='' />
        </picture>
    );
};

export default Image;