import React from 'react';
import {ImList} from "react-icons/im"
import { Link } from 'react-router-dom';
function NavBar({listaNum}){
    return(
        <div className='navBar'>
            <Link to="/">Filmovi</Link>
            <Link to="/listalike">Lista lajkovanih filmova</Link>
        <Link to="/lista" className='lista-items'>
            <ImList style={{marginLeft:10}}/>
            <div className='lista-num'>{listaNum}</div>
        </Link>
        </div>
    )
}
export default NavBar