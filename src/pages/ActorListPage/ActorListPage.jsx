import { movies } from "../../data.js";
import ActorCard from "../../components/ActorCard/ActorCard.jsx";
import "./ActorListPage.css";

export default function ActorListPage() {
   
    return (
        <>
            <h1>Actor List</h1>
            <div id="all-actors-container">
                <ActorCard />
            </div>
        </>
    )
}