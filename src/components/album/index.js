import React from "react";
import "./album.css";
import Image from "./image";
import Desc from "./desc";

// Album Wrapper
const Album = ({ musics, selected, setSelected }) => {

    const HandleSelected = (uri) => {
        const alreadySelected = selected.find((selectedUri) => selectedUri === uri);
        if (alreadySelected) {
            const filteredTracks = selected.filter(
                (selectedUri) => selectedUri !== uri
            )
            setSelected(filteredTracks)
        } else {
            setSelected([...selected, uri]);
        }
    }

    return (
        <div className="album-wrapper">
            {musics.map(({ id, album, artists, name, uri }) => {
                const isSelected = selected.find((selectedUri) => selectedUri === uri);
                return (
                    <div className='shortCard'>
                        <Image album={album} />
                        <Desc album={album} title={name} artists={artists} />
                        <button className='btn btn-select' onClick={() => HandleSelected(uri)} >{isSelected ? "Diselect" : "Select"}</button>
                    </div>
                )
            })}
        </div>
    );
};

export default Album;