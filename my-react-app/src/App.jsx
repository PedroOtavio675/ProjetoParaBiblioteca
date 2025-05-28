import "./components/caixaDolivro";
import "./index.css";
import "./components/BarraCima";
import BarraCima from "./components/BarraCima";
import CaixaDoLivro from "./components/caixaDolivro";
import BarraLateral from "./components/BarraLatral";
import { useState } from "react";

const App = () => {

  const [sairBarra, setSairBarra]=useState(true)
  const aparecerBarraBotao=()=>{
        setSairBarra(false)
        console.log(sairBarra);
    }
     
    const sairBarraBotao=()=>{
        setSairBarra(true)
        console.log(sairBarra);
    }

  const[livros, setLivros]=useState([
      {
    nome: '1984',
    autor: 'George Orwell',
    genero: 'Ficção',
    descricao: 'Um romance distópico sobre um regime totalitário que vigia todos os cidadãos.'
  },
  {
    nome: 'Dom Casmurro',
    autor: 'Machado de Assis',
    genero: 'Romance',
    descricao: 'A história de Bentinho e Capitu, marcada por dúvidas e ciúmes.'
  },
  {
    nome: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    genero: 'Fantasia',
    descricao: 'Uma jornada épica para destruir um anel poderoso e salvar a Terra-média.'
  },
  {
    nome: 'Cem Anos de Solidão',
    autor: 'Gabriel García Márquez',
    genero: 'Romance',
    descricao: 'A saga da família Buendía em uma cidade mágica chamada Macondo.'
  },
  {
    nome: 'Orgulho e Preconceito',
    autor: 'Jane Austen',
    genero: 'Romance',
    descricao: 'Romance clássico sobre amor, orgulho e classe social na Inglaterra do século XIX.'
  },
  {
    nome: 'A Revolução dos Bichos',
    autor: 'George Orwell',
    genero: 'Ficção',
    descricao: 'Fábula em que os animais se rebelam contra os humanos.'
  },
  {
    nome: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    genero: 'Infantil',
    descricao: 'Uma reflexão poética sobre a vida, o amor e a amizade.'
  },
  {
    nome: 'Ensaio sobre a Cegueira',
    autor: 'José Saramago',
    genero: 'Ficção',
    descricao: 'Uma epidemia súbita de cegueira revela o caos da sociedade.'
  },
  {
    nome: 'O Código Da Vinci',
    autor: 'Dan Brown',
    genero: 'Suspense',
    descricao: 'Um thriller envolvendo arte, religião e segredos históricos.'
  },
  {
    nome: 'Moby Dick',
    autor: 'Herman Melville',
    genero: 'Aventura',
    descricao: 'A obsessão do capitão Ahab em caçar a lendária baleia branca.'
  }
  ])

  
  return (
    <div className="flex flex-col items-center">
      <BarraCima aparecerBarraBotao={aparecerBarraBotao} setSairBarra={setSairBarra} sairBarra={sairBarra}/>
      <CaixaDoLivro livros={livros}/>
      <BarraLateral sairBarraBotao={sairBarraBotao} setSairBarra={setSairBarra} sairBarra={sairBarra}/>
    </div>
  );
};

export default App;
