import React from "react";


const MovieCard = ({ movie }) => {
    return ( 
        <div className='movie'>
            <div>
            <p>{movie.Year}</p>
            </div>
            <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://static.miraheze.org/nonciclopediawiki/b/b2/Dario_Greggio_in_preghiera.jpg'} alt={movie.Title} />
            </div>

            <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;