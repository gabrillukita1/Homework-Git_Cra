import { Component } from 'react';
import './App.css';
import ShortcardAlbum from './components/album';
import SearchBar from './components/navbar/searchBar/searchBar';
import Login from './components/navbar/login/login';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            musics: [],
        }
    }

    render() {
        const params = new URLSearchParams(window.location.hash.replace("#", "?"))
        const accessToken = params.get("access_token")

        return (
            <div>
                <Login />
                <SearchBar token={accessToken} onChange={(value)=> this.setState({
                    musics: value
                })} />
                <ShortcardAlbum musics={this.state.musics} />
            </div>
        )
    }
}

// const App = () => {
//     const [ musics, setMusics ] = useState([]);

//     const params = new URLSearchParams(window.location.hash.replace("#", "?"));
//     const accessToken = params.get("access_token");
   
//     return (
//         <div>
//             <Login />
//             <SearchBar token={ accessToken } onChange={(value) => setMusics({value})} />
//             <ShortcardAlbum musics={ musics } />
//         </div>
//     ) 
// }

export default App;