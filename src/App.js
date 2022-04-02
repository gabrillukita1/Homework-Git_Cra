import { useState } from 'react';
import './App.css';
import ShortcardAlbum from './components/album';
import SearchBar from './components/navbar/searchBar/searchBar';
import Login from './components/navbar/login/login';
import FormPlaylist from './components/playlist/formPlaylist';

const App = () => {
    const [ musics, setMusics ] = useState([]);

    const params = new URLSearchParams(window.location.hash.replace("#", "?"));
    const accessToken = params.get("access_token");
   
    return (
        <div>
            <Login />
            <FormPlaylist />
            <SearchBar token={ accessToken } onChange={(value) => setMusics(value)} />
            <ShortcardAlbum musics={ musics } />
        </div>
    ) 
}

export default App;