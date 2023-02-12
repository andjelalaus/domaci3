import React from "react";
import ListaFilm from "./listaFilm";
const ListaLike=({listaLike,searchText,onAddLike,onAddDislike,onRemove})=>{
    return (
    <div className="cart-conteiner">
        <h1>Lista lajkovanih filmova:</h1>

        {searchText === "" ? (listaLike.map((film)=>(
            <ListaFilm key={film.id} film={film} onAddLike={onAddLike} onAddDislike={onAddDislike} onRemove={onRemove}/>
        )
        )
        ):(
            <>  {listaLike.filter((film) =>
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
export default ListaLike;