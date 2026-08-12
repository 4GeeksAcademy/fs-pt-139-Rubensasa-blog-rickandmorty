import {useEffect} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {CharacterCard} from "../components/ChareacterCard.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: "set_characters", payload: data.results });
      })
      .catch(err => console.error("Error fetching characters:", err));
  	}, []);

	return (
		<div className="container mt-5">
			<h1 className="text-danger fw-bold">Characters</h1>

			<div className="d-flex overflow-auto gap-3 pb-3">
        		{store.characters.map(character => (
          		<CharacterCard key={character.id} character={character} />
      			))}
      		</div>

		</div>
	);
}; 