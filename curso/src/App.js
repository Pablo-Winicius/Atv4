import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import alface from "./assets/alface.png";
import beterraba from "./assets/beterraba.png";
import cenoura from "./assets/cenoura.png";
import laranja from "./assets/laranja.png";
import limao from "./assets/limao.png";
import manga from "./assets/manga.png";
import tomate from "./assets/tomate.png";


export default function App() {
  const [state, setState] = useState([
    {
      imagem: `${alface}`
    },
    {
      imagem: `${beterraba}`
    },

    {
      imagem: `${cenoura}`
    },
    {
      imagem: `${laranja}`
    },
    {
      imagem: `${limao}`
    },
    {
      imagem: `${manga}`
    },
    {
      imagem: `${tomate}`
    }
  ]);

  return (
    <>
      
      <div>
        {state.map((item) => (
          <img src={item.imagem} />
        ))}
      </div>
    </>
  );
}
