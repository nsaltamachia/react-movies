import { movies } from "../../data.js";
import { Link } from "react-router-dom";
import "./MovieCard.css";

export default function MovieCard({ movie }) {
    const movieData = movies.find((m) => m.id === movie.id);

    return (
        <Link to={`/movies/${movie.id}`}>
            <div id="movie-image-card" style={{
                backgroundImage: `url(${movie.posterPath})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                }}>
                <div id="movie-info-card">
                    <p>NAME: <br /> {movie.title}</p>
                    <p>RELEASED ON: <br />{new Date(movie.releaseDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
            </div>
        </Link>
    );
}