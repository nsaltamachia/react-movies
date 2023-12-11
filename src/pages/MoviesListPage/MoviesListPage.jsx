import { movies } from "../../data.js";
import MovieCard from "../../components/MovieCard/MovieCard.jsx";
import "./MoviesListPage.css";

export default function MoviesListPage() {
    return (
        <>
            <h1>Movie List</h1>
            <div id="all-movies-container">
                {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </div>
            
        </>
    )
}