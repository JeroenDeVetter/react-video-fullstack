import React, {useState} from 'react';
import Home from './View/home';
import MovieDis from "./View/movieDis";
import Login from "./View/login";
import Register from "./View/register";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = () => {
  const [movieId,setMovieId] = useState(0);
  const [countHome, setCountHome] = useState(1);
  const [Search, setSearch] = useState();
  const [MovieName, setMovieName] = useState();
  const [users, setUsers] = useState([]);
 console.log('o hallo there');
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Home Search={Search} setMovieName={setMovieName} setSearch={setSearch} countHome={countHome} setCount={setCountHome} setMovieID={setMovieId}/>}/>
          <Route path="/movie" component={() => <MovieDis movieName={MovieName} movieId={movieId}/>}/>
          <Route path="/login" component={() => <Login users={users} setUsers={setUsers}/>}/>
          <Route path="/register" component={() => <Register/>}/>
        </Switch>
      </Router>
  )
};

export default App;