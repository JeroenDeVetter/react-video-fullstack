import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Key from '../apiKey';
import Nav from '../Component/nav';
import PageNav from '../Component/pagenav';
import CardList from '../Component/cardList';
import Axios from "axios";


const Home = (props) => {
    const [movie, setMovie] = useState([]);

    // Key variable need te be your own key if you want to use this
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${Key}&language=en-US&page=${props.countHome}`;


    if (props.Search !== undefined) {
        url = `https://api.themoviedb.org/3/search/movie?api_key=${Key}&query=${props.Search}&page=${props.countHome}`
    }

    useEffect(() => {
        Axios.get(url).then(json => setMovie(json.data.results))
    }, [url]);

    useEffect(() => {
        Axios.get("http://localhost:3001/users").then(json => console.log(json))
    });

    return (
        <div className="App">
            <div className="Navbar">
                <header>
                    <Nav event={props.setSearch} atribute={setMovie}/>
                </header>
            </div>
            <h1 className="mt-4">Overview latest movies</h1>
            <div className="page-nav">
                <PageNav count={props.countHome} setCount={props.setCount}/>
            </div>

            <div className="Card">
                <CardList setMovieName={props.setMovieName} movies={movie} setMovieId={props.setMovieID}/>
            </div>
            <div className="page-nav">
                <PageNav count={props.countHome} setCount={props.setCount}/>
            </div>
        </div>
    )
};

export default Home;