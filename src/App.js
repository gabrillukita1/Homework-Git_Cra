import './App.css';
import singleData from './assets/data/single';
import ShortcardAlbum from './components/album';

function App() {
    const { album, artists } = singleData;
    
    return ( 
        <main>
            <ShortcardAlbum album={ album } artists={ artists } />
        </main>
    );
}

export default App;