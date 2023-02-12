import React from "react";
import ListaFilm from "./listaFilm";
const ListaDisLike=({listaDisLike})=>{
    return (
    <div className="cart-conteiner">
        <h1>Lista dislajkovanih filmova:</h1>
        {listaDisLike.map((film)=>(
            <ListaFilm key={film.id} film={film}/>
        )
        )}
        </div>
    );
};
export default ListaDisLike;