import React from 'react';
import { Link } from 'react-router-dom';


const movies = (md) => {

    return md.map((movie) => {
        return (
            
                <div className="movie-info">
                    <div className="movie-poster-wrap">
                        <div class="movie-container">
                        <figure>
                            <Link to={`/movie/${movie.id}`}><img className="movie-image" src={movie.poster} alt={movie.poster} /></Link>
                            <Link to={`/movie/${movie.id}`}><button class="btn">More Info</button></Link>
                        </figure>
                        </div>
                        <div className="movie-text">
                            <h3><Link to={`/movie/${movie.id}`}>{movie.title}</Link></h3>
                        
                        <div className="release-date">
                            <p> {movie.date}</p>
                        </div>
                        
                        <div className="movie-summary">
                            <p>{movie.genres}</p>
                            <p>{movie.excerpt}</p>
                        </div>
                        
                        <div className="rating">
                            <img className="rating-star"></img>
                            
                            <div className="rating-number"> 
                                <p className={`${movie.rate === 0 ? 'text'
                                    : movie.rate > 0 && movie.rate < 4 ? 'text'
                                        : movie.rate >= 4 && movie.rate < 7 ? 'text'
                                            : 'text'}`} >{movie.rate}</p> 
                            </div>
                        </div>
                        
                        <div className="movie-btn-wrapper">
                        
                        </div>
                    </div>    
                    </div>
            </div>
        );
    })
}

const MovieGrid = (props) => (
    <div className="movie-list">
        {movies(props.movieData)}
    </div>
);

export default MovieGrid;