import React from "react";
import ListaFilm from "./listaFilm";
const Lista=({listaFilm,onAddLike,onAddDislike,onRemove,searchText})=>{
    return (
    <div className="cart-conteiner">
        <h1>Lista za gledanje filmova:</h1>
        {searchText === "" ? (
        listaFilm.map((film)=>(
            <ListaFilm key={film.id} film={film} onAddLike={onAddLike} onAddDislike={onAddDislike} onRemove={onRemove}/>
        )
        )) : (
            <>  {listaFilm.filter((film) =>
                film.title.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((film) => (
                <div key={film.id}>
                   <ListaFilm key={film.id} film={film} onAddLike={onAddLike} onAddDislike={onAddDislike} onRemove={onRemove}/>

                </div>
              ))}
          </>
        )}
        </div>
    );
};
export default Lista;