import './App.css';
import data from './assets/data/data';
import ShortcardAlbum from './components/album';

function App() {
    
    return ( 
        <main>
            <ShortcardAlbum musics={data} />
        </main>
    );
}

export default App;