import React from "react";
import ListaFilm from "./listaFilm";
const ListaDisLike=({listaDisLike,searchText,onAddLike,onAddDislike,onRemove})=>{
    return (
    <div className="cart-conteiner">
        <h1>Lista dislajkovanih filmova:</h1>
        {searchText === "" ? (
        listaDisLike.map((film)=>(
            <ListaFilm key={film.id} film={film} onAddLike={onAddLike} onAddDislike={onAddDislike} onRemove={onRemove}/>
        )
        )):(
            <>  {listaDisLike.filter((film) =>
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
export default ListaDisLike;