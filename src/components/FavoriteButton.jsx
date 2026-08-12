import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const FavoriteButton = ({ character }) => {
    
    const { store, disptch} = useGlobalReducer();
    
    const isFavorite = store.favorites.some(fav => fav.id === character.id);

    const toggleFavorite = () => {

        if (isFavorite) {
            dispatch ({ type: "remove_favorite", payload: character.id});
        }

        else {
            dispatch({ type: "add_favorite", payload: character });
        }
    };

    return (

        <button className="btn btn-outline-warning" onClick={toggleFavorite} arial-label="Toggle favorite">

            <i className={isFavorite ? "bi bi-heart-fill" : "bi bi-heart"}></i>

        </button>
    )
    
}