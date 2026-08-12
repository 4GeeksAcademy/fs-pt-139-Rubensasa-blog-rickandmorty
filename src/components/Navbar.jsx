import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {

	const { store } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light px-4">

      		<Link to="/" className="navbar-brand">

        		<span className="fw-bold">Rick and Morty</span>

      		</Link>

			<div className="dropdown">
 	
	    	<button
        		className="btn btn-primary dropdown-toggle d-flex align-items-center gap-2"
    			type="button"
        		data-bs-toggle="dropdown"
        		aria-expanded="false">
			
				Favorites
          		<span className="badge bg-light text-dark">

            		{store.favorites.length}

          		</span>
        	</button>

				<ul className="dropdown-menu dropdown-menu-end" style={{ minWidth: "250px" }}>
    	      		{store.favorites.length === 0 && (
            	
					<li className="dropdown-item-text text-muted">
				
						No favorites yet
				
					</li>

    	      		)}
          		
					{store.favorites.map(fav => (
            	
						<li key={fav.id} className="dropdown-item d-flex justify-content-between align-items-center">
            	
						{fav.name}

	            		</li>

	          		))}
        		</ul>

      		</div>

    	</nav>

	);
};