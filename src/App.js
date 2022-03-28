import './App.css';
import data from './assets/data/single';
import ShortcardAlbum from './components/album';

function App() {
    const { album, artists } = data;
    
    return ( 
        <main>
            <ShortcardAlbum album={ album } artists={ artists } />
        </main>
    );
}

export default App;