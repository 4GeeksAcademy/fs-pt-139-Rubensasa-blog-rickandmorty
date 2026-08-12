import{Link} from "react-router-dom";
import{FavoriteButtonimport} from "./FavoriteButton.jsx";

export const CharacterCard = ({character}) => {

    return (

        <div className="card flex-shrink-0" style={{width: "18rem"}}>

            <img src={charecter.image} className="card-img-top" alt={character.name}/>

            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text mb-1">Status: {character.status}</p>
                <p className="card-text mb-1">Species: {character.species}</p>
                <p className="card-text">Gender: {character.gender}</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <Link to={`/single/${character.id}`} className="btn btn-outline-primary">
                        Saber más!
                    </Link>

                    <FavoriteButton character={character} />
                </div>
            </div>
        </div>
    )
}