import React from 'react';
import {ImPlus,ImMinus,ImPlay3, ImFontSize} from "react-icons/im"
import {IoIosCheckmark,IoIosClose} from "react-icons/io"
const OneFilm = ({film,onAdd,onRemove}) => {

    return(
        <div className='card' style={{margin:10}}>
            <img className="card-img-top" src={film.img}/>
            <div className="card-body">
            <h3 className='card-title'>{film.title}</h3>
            <h4>Trajanje: </h4> <p className='card-text'>{film.duaration}</p>
            <h4>Godina izlaska: </h4><p className='card-text'>{film.year}</p>
            <h4>Opis: </h4><p className='card-text'>{film.description}</p>
            <h4>Ocena: </h4> <p className='card-text'>{film.IMDb}</p>
            <h4>Trejler: </h4><a href={film.trailer} style={{fontSize:40}}><ImPlay3 /></a>
                    <br></br>
                    <br></br>
                <button className='btn' onClick={()=>onAdd(film.id)} style={{fontSize:40, color:'blue'}}>
                    <IoIosCheckmark />
                    </button>
                    <button className='btn' onClick={()=>onRemove(film.id)} style={{fontSize:40}}>
                    <IoIosClose />
                    </button>

            </div>
        </div>
    );
};
export default OneFilm;