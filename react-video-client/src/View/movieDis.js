import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Nav from '../Component/nav';
import Trailer from '../Component/iframe';
import Credit from '../Component/credit';
import Axios from "axios";

const MovieDis = (props) => {
    const [trailerKey, setTrailerKey] = useState([]);
    const [cast, setCast] = useState([]);
    let url = `http://api.themoviedb.org/3/movie/${props.movieId}/videos?api_key=4d6f4b60a499907f2f7cb19137144751`;
    let url2 = `http://api.themoviedb.org/3/movie/${props.movieId}/credits?api_key=4d6f4b60a499907f2f7cb19137144751`;

    useEffect(() => {
        Axios.get(url).then(json => setTrailerKey(json.data.results))
    }, [url]);

    useEffect(() => {
        Axios.get(url2).then(json => setCast(json.data.cast))
    }, [url2]);

     let key = "";
     loop :  for (let i = 0; i < trailerKey.length; i++) {
         let name = trailerKey[i].name.toLowerCase().split(" ");
         for (let j = 0; j < name.length; j++) {
             if (name[j] === "official" && name[j + 1] === "trailer") {
                 key = trailerKey[i].key;
                 name = trailerKey[i].name;
                 break loop;
             }
             if (name[j] === "trailer") {
                 key = trailerKey[i].key;
                 name = trailerKey[i].name;
                 break loop;
             }
         }
     }
    return (
        <div className="App">
            <div className="Navbar">
                <header>
                    <Nav/>
                </header>
            </div>

            <h1 className="mt-4">
                {props.movieName}
            </h1>

             <div className="Card">
                <Trailer trailer={key}/>
            </div>
            <h1 className="mt-3">Cast</h1>
            <div className="Card">
                {cast.map(data => {

                    if (data.profile_path !== null) {
                        return (
                            <div key={data.id}>
                                <Credit name={data.name} src={data.profile_path} character={data.character} gender={data.gender}/>

                            </div>
                        )
                    }
                    return false;
                })}
            </div>
        </div>
    )
};

export default MovieDis;