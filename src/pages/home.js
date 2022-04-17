import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ShortcardAlbum from '../components/album';
import SearchBar from '../components/navbar/searchBar/searchBar';
import FormPlaylist from '../components/playlist/formPlaylist';

const Home = () => {
    const [musics, setMusics] = useState([]);
    const [selected, setSelected] = useState([]);
    const [profile, setProfile] = useState({});
    const accessToken = useSelector((state) => state.global.accessToken)
    console.log(accessToken)

    const getUserProfile = async () => {
        const response = await fetch(`https://api.spotify.com/v1/me`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
        const data = await response.json();
        console.log(data);
        setProfile(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { getUserProfile() }, []);

    const createPlaylist = async (value) => {
        const response = await fetch(`https://api.spotify.com/v1/users/${profile.id}/playlists`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                body: JSON.stringify({
                    name: value.name,
                    description: value.description,
                    public: false,
                    collaborative: false,
                })
            })
        const playlist = await response.json();

        const playlistResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                body: JSON.stringify({ uris: selected })
            })
        const tracks = await playlistResponse.json()
        console.log(tracks)
    }

    console.log(selected)
    return (
        <div>
            <FormPlaylist onSubmit={createPlaylist} />
            <SearchBar onChange={(value) => setMusics(value)} />
            <ShortcardAlbum musics={musics} selected={selected} setSelected={setSelected} />
        </div>
    )
}

export default Home;