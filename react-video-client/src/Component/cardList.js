import MovieCard from "./card";
import React from "react";
const cardList = (props) => {
    return props.movies.map(data => {
        let titleMovie = "";
          return (
              <div className="cardItems" id={data.id} key={data.id} onClick={(event) => {
                  props.setMovieId(event.currentTarget.id);
                  props.setMovieName(event.currentTarget.lastChild.childNodes[1].childNodes[0].innerText);
              }}>
                  <MovieCard movie={titleMovie}  src={`http://image.tmdb.org/t/p/w185//${data.poster_path}`} title={data.title} overview={data.overview}/>
              </div>
          )
    })
};
export default cardList;