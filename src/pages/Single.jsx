// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state
import { useEffect, useState } from "react";

export const Single = () => {

  const { theid } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${theid}`)
      .then(resp => resp.json())
      .then(data => setCharacter(data))
      .catch(err => console.error("Error fetching character:", err));
  }, [theid]);

  if (!character) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img src={character.image} className="img-fluid rounded" alt={character.name} />
        </div>
        <div className="col-md-8">
          <h1>{character.name}</h1>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Status: {character.status}</li>
            <li className="list-group-item">Species: {character.species}</li>
            <li className="list-group-item">Gender: {character.gender}</li>
            <li className="list-group-item">Origin: {character.origin?.name}</li>
            <li className="list-group-item">Last known location: {character.location?.name}</li>
            <li className="list-group-item">Episodes appeared in: {character.episode?.length}</li>
          </ul>
          <Link to="/" className="btn btn-primary mt-3">Back to Characters</Link>
        </div>
      </div>
    </div>
  );
};