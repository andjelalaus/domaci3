import React from "react";
import ListaFilm from "./listaFilm";
const ListaLike=({listaLike})=>{
    return (
    <div className="cart-conteiner">
        <h1>Lista lajkovanih filmova:</h1>
        {listaLike.map((film)=>(
            <ListaFilm key={film.id} film={film}/>
        )
        )}
        </div>
    );
};
export default ListaLike;