import { movies } from "../../data.js";
import { Link } from "react-router-dom";
import "./ActorCard.css";

export default function ActorCard({ movie }) {
    const allActors = movies.map(movie => movie.cast).flat();
    const uniqueActors = new Set(allActors);
    const actors = [...uniqueActors];


    return (
        
        actors.map((actor, index) => (
            <Link key={index} to={`/actors/${actor}`}>
                <div id="actor-image-card" style={{
                    backgroundImage: `url(https://picsum.photos//id/${index +10}/200/300)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                    <div id="actor-info-card">
                        <h3>{actor}</h3>
                    </div>
                </div>
            </Link>
        ))
    );
}