import './App.css';
import React, { useEffect, useState } from 'react';
import ShortcardAlbum from './components/album';
import SearchBar from './components/navbar/searchBar/searchBar';
import Login from './components/navbar/login/login';
import FormPlaylist from './components/playlist/formPlaylist';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from './redux/globalSlice';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    const [musics, setMusics] = useState([]);
    const [selected, setSelected] = useState([]);
    const [profile, setProfile] = useState({});
    const accessToken = useSelector((state) => state.global.accessToken)
    console.log(accessToken)

    const params = new URLSearchParams(window.location.hash.replace("#", "?"));
    const tokenParams = params.get("access_token");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setToken(tokenParams))
    },
        [tokenParams]
    );

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
    useEffect(() => { getUserProfile() }, [accessToken]);

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
            <Login />
            <FormPlaylist onSubmit={createPlaylist} />
            <SearchBar onChange={(value) => setMusics(value)} />
            <ShortcardAlbum musics={musics} selected={selected} setSelected={setSelected} />

            {/* <Router>
                <Route path="/" exact component={Login} />
                <Route path="/" exact component={<SearchBar onChange={(value) => setMusics(value)} />} />
                <Route path="/" exact component={<ShortcardAlbum musics={musics} selected={selected} setSelected={setSelected} />} />
            </Router> */}
        </div>
    )
}

export default App;