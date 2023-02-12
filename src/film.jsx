import React from 'react';
import OneFilm from './oneFilm';
const Filmovi=({filmovi,onAdd,onRemove,searchText})=>{
    
    return(
        <div><h1>Filmovi</h1>
        <div className='all-films'>
        {searchText === "" ? (
            filmovi.map((film)=>(
                <OneFilm
                key={film.id}
                film={film}
                onAdd={onAdd}
                onRemove={onRemove}
                />

            ))
            ) : (
                <>  {filmovi.filter((film) =>
                    film.title.toLowerCase().includes(searchText.toLowerCase())
                  )
                  .map((film) => (
                    <div key={film.id}>
                      <OneFilm
                key={film.id}
                film={film}
                onAdd={onAdd}
                onRemove={onRemove}
                />

                    </div>
                  ))}
              </>
            )}
           
        </div>
        </div>
    );
};
export default Filmovi;