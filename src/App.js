import React, { useState } from 'react'
import './App.css';
import image1 from './img/The_Forgotten_Battle.jpg'
import image2 from './img/The Sacrifice.jpg'
import image3 from './img/The War Below.jpg'
import image4 from './img/Without Remorse.jpg'
import { v4 as uuidv4 } from 'uuid';
import MovieList from './MovieList';
import { Filter } from './Filter';
import Add from './Add';
import { Routes, Route } from "react-router-dom";
import discription from './Discription.js';
function App() {
  const [movies, setMovies] = useState([

    {
      id: uuidv4(),
      title: "The Forgotten Battle",
      disription: "A British glider pilot, a Dutch boy fighting on the German side and a Dutch female resistance member all end up involved in the Battle of the Schelde. Their choices differ, but their goal is the same: freedom.",
      image: image1,
      rating: "4"
    },
    {
      id: uuidv4(),
      title: "The Sacrifice",
      disription: "sacrifice, Act of offering objects to a divinity, thereby making them holy. The motivation for sacrifice is to perpetuate, intensify, or reestablish a connection between the human and the divine. It is often intended to gain the favour of the god or to placate divine wrath.",
      image: image2,
      rating: "5"
    },

    {
      id: uuidv4(),
      title: "The War Below",
      disription: "This companion novel to Skrypuch's Making Bombs for Hitler follows a boy who joins the underground Ukrainian resistance in the fight against Hitler. The Nazis took Luka from his home in Ukraine and forced him into a labor camp. Now, Luka has smuggled himself out - even though he left behind his dearest friend, Lida.",
      image: image3,
      rating: "7"
    },
    {
      id: uuidv4(),
      title: "Without Remorse",
      disription: "Without Remorse is a thriller novel, written by Tom Clancy and published on August 11, 1993. Set during the Vietnam War, it serves as an origin story of John Clark, one of the recurring characters in the Ryanverse. Without Remorse introduces Clark as former Navy SEAL John Kelly and explains how he changed his name.",
      image: image4,
      rating: "8"
    },
  ]);
  const [search, setSearch] = useState("")
  const [rate, setRate] = useState(1);
  const [input, setInput] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const addMovie = (data) => {
    setMovies([...movies, data])
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<>
          <MovieList movies={movies.filter(el => el.title.toLowerCase().includes(search.toLowerCase().trim()) && (el.rating >= rate))} />
          <Filter setSearch={setSearch} setRate={setRate} />
          <Add setModalShow={setModalShow} addMovie={addMovie} />
        </>} />
        <Route path="/:id" element={<discription movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
