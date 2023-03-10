import React from 'react';
import {ImPlay3} from "react-icons/im"
import {FcLike,FcDislike} from "react-icons/fc"
import {IoIosCheckmark,IoIosClose} from "react-icons/io"
import ReactPlayer from 'react-player'
const ListaFilm = ({film,onAddLike,onAddDislike,onRemove}) => {
    const design={margin:10};
    return(
        <div className='card-lista' style={design}>
            <img className="card-img-left" src={film.img}/>
            <div className="card-body">
             <h3 className='card-title'>{film.title}</h3>
             <h4 className='card-text'>{film.duaration}</h4>
             <p className='card-text'>{film.year}</p>
             <p className='card-text'>{film.description}</p>
             <p className='card-text'>{film.IMDb}</p>
             <ReactPlayer url={film.trailer} className='player' width="60%" height="60%" controls={true} />
             
                    <br></br>
            <h3>Amount:{film.amount}</h3>
            <button className='btn' onClick={()=>onAddLike(film.id)} style={{fontSize:50}}>
                    <FcLike size={50}/>
                    </button>
                    <button className='btn' onClick={()=>onAddDislike(film.id)} style={{fontSize:50}}>
                    <FcDislike size={50} />
                    </button>
                    <button className='btn' onClick={()=>onRemove(film.id)} style={{fontSize:50}}>
                    <IoIosClose size={50}/>
                    </button>
            </div>
        </div>
    );
};
export default ListaFilm;