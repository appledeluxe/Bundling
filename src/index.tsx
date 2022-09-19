import React from "react";
import {createRoot} from 'react-dom/client';
import {greet} from './holamundo';
import logoImg from "./content/logo_1.png";
import  "./mystyles";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Hello world React</h1>
    <h2 className="saludo">Hola mundo estilado con sass </h2>
    
  </div>
);

document.write(greet());

const img = document.createElement("img");
img.src = logoImg;

document.getElementById("imgContainer").appendChild(img);

