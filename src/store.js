export const initialStore = () => {
 
  const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return {
    message: null,
    characters: [],
    favorites: savedFavorites
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'set_characters':
      return {
        ...store,
        characters: action.payload
      };

    case 'add_favorite': {
      if (store.favorites.some(fav => fav.id === action.payload.id)) {
        return store;
      }
      const updatedFavorites = [...store.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return {
        ...store,
        favorites: updatedFavorites
      };
    }

    case 'remove_favorite': {
      const updatedFavorites = store.favorites.filter(fav => fav.id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return {
        ...store,
        favorites: updatedFavorites
      };
    }

    default:
      return store;
  }
}