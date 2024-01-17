import React, { useEffect, useState } from "react";
import SearchIcon from './Search.svg'
import './App.css'
import MovieCard  from "./MovieCard";

//6c88b938
//29edef71
// http://www.omdbapi.com/?apikey=29edef71&s=ted
const api_Url = "http://www.omdbapi.com/?apikey=29edef71";
const movie1 = 
{
    "Title": "Superman Returns",
    "Year": "2006",
    "imdbID": "tt0348150",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDUzZGRhNzktYTZkMC00YWFiLTljMDEtMTk2OWJhYzAyYmY2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
}
const App = () => {
    const [movies , Setmovie] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const serachMovie = async(title) =>{
        const response =  await fetch(`${api_Url}&s=${title}`);
        const data = await response.json();
        Setmovie(data.Search);
    }

    
     useEffect(() =>{
        serachMovie('Superman Returns')
    },[]);
    
    const handleSearch = () => {
        serachMovie(searchTerm);
      };
    return (
        <div className="app">
            <h1>Movie Land</h1>
            <div className="search">
                <input placeholder="Search for Movie" value={searchTerm} onChange={(e) =>{setSearchTerm(e.target.value)}}></input>
                <img src={SearchIcon} alt="SearchICOn" onClick={()=>{handleSearch()}}></img>
            </div>
            {movies?.length > 0 ?(
                <div className="container">
                { movies.map((movie) =>
                    (
                        < MovieCard key={movie.imdbID} movie= {movie} />
                    ))
                }
                </div>
                    ) : (
                <div className="empty">
                    <h2>No Movies Found</h2>

                </div>
            )}
            
           
        </div>
        
    )
}

export default App;