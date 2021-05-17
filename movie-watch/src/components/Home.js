import React, { useState, useEffect } from 'react';
import {API_KEY_ONLY} from '../global/Variables';
import movieMaker from '../utilities/movieMaker';
import MovieGrid from './MovieGrid';
import Chart from './Chart';
import Year from './Year';
import '../styles/main.scss';
import Nav from './Nav';

const Home = () => {

    const key = API_KEY_ONLY;
    // setting the current year as initial year
    const d = new Date();
    const y = d.getFullYear();
    const [year, setYear] = useState(y);
    // setting popularity as initial topic of search
    const [chart, setChart] = useState('popular');
    // set the variables that we want react to keep track of 
    const [movieData, setMovieData] = useState(null);
    const [nav, setNav] = useState('home');

    // [call back, when do we want the call back?]
    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${chart}?api_key=${key}&language=en-US&page=1&primary_release_year=${year}`);
            let data = await res.json();
            const formattedmovieData = movieMaker(data.results);
            setMovieData(formattedmovieData);
        }
        fetchMovies();
    }, [year, chart]);

    // State Change Methods
    const handleChangeYear = (year) => {
        setYear(year);
    }
    const handleChangeChart = (chart) => {
        setChart(chart);
    }
    const handleChange = (nav) => {
        setNav(nav);
    }

    return (
        <main>
            <section>
            <Nav 
                nav={nav}
                handleChange={handleChange}/>
            <Year
                year={year}
                handleChangeYear={handleChangeYear} />

            <Chart
                chart={chart}
                handleChangeChart={handleChangeChart} />
            </section>
            
            {JSON.stringify(movieData).length > 2 ? (
                <section className="movie-database">
                    {movieData && <MovieGrid movieData={movieData} />}
                </section>
            ) :(
                <p class="nodata"><img src="#" alt="nodata"></img><br></br>
                    There is no movie.<br></br>
                    Please select your movie again.</p>
            
            )}
        </main>
     
    );
}
export default Home;
