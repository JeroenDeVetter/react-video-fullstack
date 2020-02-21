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
  const [display,setDisplay] = useState('none');
  const [message,setMessage] = useState('');
  const [variant,setVariant] = useState('');
  const [logout, setLogout] = useState('none');
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Home Search={Search} setMovieName={setMovieName} setSearch={setSearch} countHome={countHome} setCount={setCountHome} setMovieID={setMovieId}/>}/>
          <Route path="/movie" component={() => <MovieDis movieName={MovieName} movieId={movieId}/>}/>
          <Route path="/login" component={() => <Login logout={logout} setLogout={setLogout} variant={variant} setVariant={setVariant} users={users} message={message} setMassage={setMessage} display={display} setDisplay={setDisplay} setUsers={setUsers}/>}/>
          <Route path="/register" component={() => <Register display={display} setDisplay={setDisplay} variant={variant} setVariant={setVariant} message={message} setMassage={setMessage}/>}/>
        </Switch>
      </Router>
  )
};

export default App;