
import { useState, useEffect } from 'react';

import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import './App.css';
// omdb key = 299e9b19
const api_url = 'https://www.omdbapi.com?apikey=299e9b19';


const App = () => {
    const [movies, setMovies] = useState([]);//empty array
    const [searchTerm, setSearchTerm] = useState('');
    // const [searchedMovie, setSearchedMovie] = useState('');
    

    useEffect(() => {
        searchMovies({searchTerm});
    }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${api_url}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };

    return ( 
      <div className = "app" >
        <h1>MovieLand</h1>

        <div className='search'>
          <input 
          placeholder='Search for movies'
          value={searchTerm}//so nothing basically
          onChange={(event) => {setSearchTerm(event.target.value)}}
          onKeyPress={event => {
                if (event.key === 'Enter') {
                  searchMovies(searchTerm)
                }
              }}
           />
           <img 
           src={SearchIcon} 
           alt="search" 
            onClick={() => searchMovies(searchTerm)}
            
           />
        </div>

        {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

    </div>
    );
}

export default App;