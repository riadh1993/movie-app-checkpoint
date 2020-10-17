
import 'bootstrap/dist/css/bootstrap.min.css'
 import React,{useState} from 'react'
 import MoviesList from "./MoviesList"
 import AddMovie from "./components/AddMovie"
 import Search from "./components/Search"
 import Rating from "./components/Rating"


 
  function App() {
      const moviesList = [
          {
         name: "Training Day",
         rating: 5,
         year: 2001,
         image: "https://fr.web.img3.acsta.net/medias/nmedia/18/68/61/99/19425646.jpg"

      },
      {
        name: "Predators",
        rating: 4,
        year: 2008,
         image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSelqllO3rIBmk_SPkVf0nGMNEsShbxqK6SaLJkGrtZe9iHZRsn"
     },
     {
        name: "The Dectator",
        rating: 3,
        year: 2012,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2wO1vAtnnQXxpE-zoQRhAKit7CQzo5PVFJnEwRxJaxYBwALW"
     },
     {
        name: "Inferno",
        rating: 2,
        year: 2014,
        image: "https://images-na.ssl-images-amazon.com/images/I/91AKMoBsSNL._AC_SX342_.jpg"
     },
    ];

    const [movies, setMovies] = useState(moviesList);
    const addMovie = (newMovie) => {
        setMovies([...movies , newMovie])
    };
    const [search, setSearch] = useState("");
    const [rating, setRating] = useState("");

    const searchF = (value) => {
        setSearch(value);
    };
    const ratingF = (value) => {
        setRating(value);
    };
      
     return (
         <div style={{textAlign: "center"}}>
        <Search search={searchF}/>
        <Rating ratingF={ratingF} rating={rating}/>           
       <MoviesList movies={movies.filter((el) => el.name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()) && el.rating >= rating)}/>
        <AddMovie addMovie={addMovie}/>
         </div>
     )
    };

 export default App;

