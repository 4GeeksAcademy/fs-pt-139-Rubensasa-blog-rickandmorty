export const initialStore=()=>{
  return{
    message: null,
    characters:[],
    favorites:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){

    case 'set_charaters':

      return {
        ...store,
        characters: action.payload
      };

      case 'add_favorite':
        if (store.favorites.some(fav=>fav.id === action.payload.id)){
          return store;
        }
        return{
          ...store,
          favorites: [...store,favorites,action.payload]
        };
      case 'remove_favorite':
        return {
          ...store,
          favorites: store.favorites.filter(fav> fav.id !== action.payload0)
        };
      
      default:
        throw Error('Unknwon action.');
  }    
}
