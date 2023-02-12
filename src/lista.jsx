import React from "react";
import ListaFilm from "./listaFilm";
const Lista=({listaFilm,onAddLike,onAddDislike,onRemove})=>{
    return (
    <div className="cart-conteiner">
        <h1>Lista za gledanje filmova:</h1>
        {listaFilm.map((film)=>(
            <ListaFilm key={film.id} film={film} onAddLike={onAddLike} onAddDislike={onAddDislike} onRemove={onRemove}/>
        )
        )}
        </div>
    );
};
export default Lista;