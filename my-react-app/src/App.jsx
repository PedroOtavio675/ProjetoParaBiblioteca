import "./components/caixaDolivro";
import "./index.css";
import "./components/BarraCima";
import BarraCima from "./components/BarraCima";
import CaixaDoLivro from "./components/caixaDolivro";
import BarraLateral from "./components/BarraLatral";
import { useState, useEffect } from "react";

const App = () => {

  const [sairBarra, setSairBarra]=useState(true)
  const aparecerBarraBotao=()=>{
        setSairBarra(false)
        console.log(sairBarra);
    }
     
    const sairBarraBotao=()=>{
        setSairBarra(true)
        console.log(sairBarra);
        console.log(livros);
        
    }

  const[livros, setLivros]=useState([]);
useEffect(()=>{
fetch('http://localhost:3000/livros')
.then((res)=>{
  if(!res.ok) throw new Error('erro ao buscar')
  return res.json()
})
.then((data)=> setLivros(data))
.catch((err)=> console.log(err))
}, [])
  
  
  
  return (
    <div className="flex flex-col items-center">
      <BarraCima aparecerBarraBotao={aparecerBarraBotao} setSairBarra={setSairBarra} sairBarra={sairBarra}/>
      <CaixaDoLivro livros={livros}/>
      <BarraLateral sairBarraBotao={sairBarraBotao} setSairBarra={setSairBarra} sairBarra={sairBarra}/>
    </div>
  );
};

export default App;
