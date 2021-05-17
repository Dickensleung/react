import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import movieMaker from '../utilities/movieMaker';
import { API_KEY_ONLY } from '../global/Variables';

const SingleMovie = () => {
    let {movieId} = useParams(); 
    const key = API_KEY_ONLY; 
    const [singleMovie, setSingleMovie] = useState({}); 
    const [isDataGood, setisDataGood] = useState(true);

    useEffect(() => {
        const fetchMovies = async () =>{
            const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}`);
            let data = await res.json();
        
            if (!singleMovie) {
              setisDataGood(false);
            }
            setSingleMovie(movieMaker([data])[0]);
                }
            fetchMovies();
    }, [movieId]);

    return (
        <main>
          <div className="s-movie-nav">
          </div>
          
          {!isDataGood ? <Redirect to="/404" /> :
            <div className={`s-movie-wrap ${singleMovie.rate === 0 ? 'text' : singleMovie.rate > 0 && singleMovie.rate < 4 ? 'text'
              : singleMovie.rate >= 4 && singleMovie.rate < 7 ? 'text' : 'text'}`}>
              <div className="s-movie-img-wrap bgposter" style={{ backgroundImage: `url("${singleMovie.bgimg}")` }} >
                <div className="s-movie-poster poster">
                  <img src={singleMovie.poster} alt={singleMovie.title} />
                </div>
              </div>
              <div className="s-movie-content">
                <div className="s-movie-header">
                  <h1 className="s-movie-title">{singleMovie.title}</h1>
                  <div className="s-movie-btn-wrapper">
                    <div className="favbtn"></div>
                    <div className="watchbtn"></div>
                    
                  </div>
                </div>
                <div className="s-movie-text">
                  <div className="overview">
                    <h3>Overview</h3><p><h2><b>{singleMovie.tagline}</b></h2>{singleMovie.overview}</p>
                  </div>
                  <div className="released">
                    <h3>Released</h3><p>{singleMovie.date}</p>
                  </div>
                  <div className="genre">
                    <h3>Genre</h3><p>{singleMovie.singleMovieGenres}</p>
                  </div>
                  <div className="runtime">
                    <h3>Runtime</h3><p>{singleMovie.runtime}</p>
                  </div>
                  <div className="rate">
                    <h3>Rate</h3><p>{singleMovie.rate}</p>
                  </div>
                </div>
              </div>
            </div>}
        </main>
    );
};

export default SingleMovie;