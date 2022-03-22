import './App.css';
import singleData from './assets/data/single'

function App() {
    const { album, artists } = singleData;
    
    return ( 
        <main>
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
                    {/* <p>{`Release on ${album.release_date}`}</p> */}
                </div>
                <button className='btn btn-select'>Select</button>
            </div>
        </main>
    );
}

export default App;