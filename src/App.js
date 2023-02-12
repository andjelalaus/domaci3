import logo from './logo.svg';
import './App.css';
import Filmovi from './film';
import NavBar from './navbar';
import Lista from './lista';
import ListaLike from './listaLike';
import ListaDisLike from './listDislike';
import './App.css';
import { useState} from 'react';
import BottomSearchBar from'./BottomSearcBar';
import{BrowserRouter, Routes,Route}from"react-router-dom";

function App() {
  const[searchText,setSearchText] = useState("");
  const [listaNum,setListaNum]=useState(0);
  const[listaFilm,setListaFilm]=useState([]);
  const[listaLike,setListaLike]=useState([]);
  const[listaDisLike,setListaDisLike]=useState([]);
  const refreshLista =()=>{
    const newFilmovi=filmovi.filter((film)=>film.amount>0);
    setListaFilm(newFilmovi);
  }
  const refreshListaLike =()=>{
    const newFilmovi=filmovi.filter((film)=>film.like>0);
    setListaFilm(newFilmovi);
  }
  const refreshListaDisLike =()=>{
    const newFilmovi=filmovi.filter((film)=>film.dislike>0);
    setListaFilm(newFilmovi);
  }
  const updateLista =(film)=>{
    setListaFilm([...listaFilm,film]);
  }
  const updateLista2 =(film)=>{
    setListaLike([...listaLike,film]);
  }
  const updateLista3 =(film)=>{
    setListaDisLike([...listaDisLike,film]);
  }

  function pretraga(text){
    setSearchText(text);
  }

  const [filmovi,setFilmovi]=useState([
    {
      id:1,
      img:"https://upload.wikimedia.org/wikipedia/sr/c/cb/The_Shawshank_Redemption.jpg",
      title:"The Shawshank Redemption",
      duaration:"2h 22m",
      year:1994,
      description:"Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
      IMDb:9.2,
      trailer:"https://www.imdb.com/video/vi3877612057/?playlistId=tt0111161&ref_=tt_pr_ov_vi",
      amount:0,
      like:0,
      dislike:0
    },
    {
      id:2,
      img:"https://ichef.bbci.co.uk/images/ic/1200x675/p09082fy.jpg",
      title:"The The Godfather",
      duaration:"2h 55m",
      year:1972,
      description:"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      IMDb:9.2,
      trailer:"https://www.imdb.com/video/vi1348706585/?playlistId=tt0068646&ref_=tt_pr_ov_vi",
      amount:0,
      like:0,
      dislike:0
    },
    {
      id:3,
      img:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      title:"The Dark Knight",
      duaration:"2h 32m",
      year:2008,
      description:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      IMDb:9.0,
      trailer:"https://www.imdb.com/video/vi324468761/?playlistId=tt0468569&ref_=tt_ov_vi",
      amount:0,
      like:0,
      dislike:0
    },
    {
      id:4,
      img:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      title:"The Godfather Part II",
      duaration:"3h 22m",
      year:1974,
      description:"The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      IMDb:9.0,
      trailer:"https://www.imdb.com/video/vi696162841/?playlistId=tt0071562&ref_=tt_ov_vi",
      amount:0,
      like:0,
      dislike:0
    },
    {
      id:5,
      img:"https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
      title:"12 Angry Men",
      duaration:"1h 36m",
      year:1957,
      description:"The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
      IMDb:9.0,
      trailer:"https://www.imdb.com/video/vi2924462873/?playlistId=tt0050083&ref_=tt_pr_ov_vi",
      amount:0,
      like:0,
      dislike:0
    },
    {
      id:6,
      img:"https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg",
      title:"How to Train Your Dragon",
      duaration:"1h 38m",
      year:2010,
      description:"A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
      IMDb:8.1,
      trailer:"https://www.imdb.com/video/vi1158218777/?playlistId=tt0892769&ref_=tt_pr_ov_vi",
      amount:0,
      like:0,
      dislike:0
    },
    {
      id:7,
      img:"https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg",
      title:"The Wolf of Wall Street",
      duaration:"3h",
      year:2013,
      description:"Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      IMDb:8.2,
      trailer:"https://www.imdb.com/video/vi2312218649/?playlistId=tt0993846&ref_=tt_ov_vi",
      amount:0,
      like:0,
      dislike:0
    },
    {
      id:8,
      img:"https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      title:"Joker",
      duaration:"2h 2m",
      year:2019,
      description:"A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
      IMDb:8.4,
      trailer:"https://www.imdb.com/video/vi1723318041/?playlistId=tt7286456&ref_=tt_ov_vi",
      amount:0,
      like:0,
      dislike:0
    },
    {
      id:9,
      img:"https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_.jpg",
      title:"Untouchable",
      duaration:"1h 52m",
      year:2011,
      description:"After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
      IMDb:8.5,
      trailer:"https://www.imdb.com/video/vi59285529/?playlistId=tt1675434&ref_=tt_ov_vi",
      amount:0,
      like:0,
      dislike:0
    },
    {
      id:10,
      img:"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      title:"Forrest Gump",
      duaration:"2h 22m",
      year:1994,
      description:"The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      IMDb:8.8,
      trailer:"https://www.imdb.com/video/vi3567517977/?playlistId=tt0109830&ref_=tt_ov_vi",
      amount:0,
      like:0,
      dislike:0
    },

  ]);
  const addToLista=(id)=>{
    filmovi.map((film)=>{
      if(film.id===id){
        film.amount=film.amount+1;
        const a=listaNum+1;
        setListaNum(a);
        if(film.amount===1){
          updateLista(film);
        }else{
        refreshLista();
        }
        console.log("film id=",film.id,"amount=",film.amount);
      }
    });
  };
  const addToListaLike=(id)=>{
    filmovi.map((film)=>{
      if(film.id===id){
        film.like=film.like+1;
        //const a=listaNum+1;
        //setListaNum(a);
        if(film.like===1){
          updateLista2(film);
        }else{
        refreshListaLike();
        }
        console.log("film id=",film.id,"amount=",film.amount);
      }
    });
  };
  const addToListaDisLike=(id)=>{
    filmovi.map((film)=>{
      if(film.id===id){
        film.dislike=film.dislike+1;
        //const a=listaNum+1;
        //setListaNum(a);
        if(film.dislike===1){
          updateLista3(film);
        }else{
        refreshListaDisLike();
        }
        console.log("film id=",film.id,"amount=",film.amount);
      }
    });
  };
    
   const remFromLista=(id)=>{
    
      filmovi.map((film)=>{
        if(film.id===id){
          if(film.amount>0){
          film.amount=film.amount-1;
          const a=listaNum-1;
          setListaNum(a);
          if(film.amount===1){
            updateLista(film);
          }else{
          refreshLista();
          }
          console.log("film id=",film.id,"amount=",film.amount);
        }else{
          alert("kreten");
        }
   } 
  });};
   

  return (
   

    <BrowserRouter>
    <NavBar listaNum={listaNum} />
    <Routes>
      <Route
      path="/"
      element={
    <Filmovi filmovi={filmovi} onAdd={addToLista} onRemove={remFromLista} searchText={searchText}/> }
    />
     <Route path="/lista" element={<Lista listaFilm={listaFilm} onAddLike={addToListaLike} onAddDislike={addToListaDisLike} onRemove={remFromLista} searchText={searchText}/>}/>
     <Route path="/listalike" element={<ListaLike listaLike={listaLike} searchText={searchText} onAddLike={addToListaLike} onAddDislike={addToListaDisLike} onRemove={remFromLista} />}/>
     <Route path="/listadislike" element={<ListaDisLike listaDisLike={listaDisLike} searchText={searchText} onAddLike={addToListaLike} onAddDislike={addToListaDisLike} onRemove={remFromLista}/>}/>
    </Routes>
    <BottomSearchBar pretraga={pretraga} />
    </BrowserRouter>
  );
}

export default App;
