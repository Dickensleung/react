import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Links = () => {
    let location = useLocation();
	let movieId = location.pathname.toString().slice(7);

    const node = useRef();
    useEffect(() => {
		// mounted
		document.addEventListener("mousedown", handleClick);

		// return function to be called when unmounted
		return () => {
		document.removeEventListener("mousedown", handleClick);
		};
    }, []);
    
    const handleClick = e => {
		if (node.current.contains(e.target)) {
			return;
		}
	}

    return(
        <div ref={node}>
            <Link to="/">
				<div className="nav-links" >
					{location.pathname === "/" }
					{location.pathname === "/about" }
					{location.pathname === "/favourites" }
					{location.pathname === "/watch-later" }
					{location.pathname === `/movie/${movieId}`}
				</div>
			</Link>
        </div>			

    );

}

export default Links; 