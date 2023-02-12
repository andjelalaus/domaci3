import React from 'react';
import {ImList} from "react-icons/im"
import { Link } from 'react-router-dom';
import ListaDisLike from './listDislike';
function BottomSearchBar({pretraga}){
    return(
        <footer>
        <div className='navBar'>
        <div className="search-field">
            <label id="lblSearch" htmlFor="search">Search </label>
            <input id="search" className="search" type="text" placeholder="Search movies" onChange={()=>pretraga(document.getElementById("search").value)}/>
        </div>
        
        <Link to="/listadislike">Lista dislajkovanih filmova</Link>
        </div>
        </footer>
    )
}


export default BottomSearchBar;