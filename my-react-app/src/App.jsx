import "./components/caixaDolivro";
import "./index.css";
import "./components/BarraCima";
import BarraCima from "./components/BarraCima";
import CaixaDoLivro from "./components/caixaDolivro";
import BarraLateral from "./components/BarraLatral";
import { useState, useEffect } from "react";

const App = () => {

  const [generoSelecionado, setGeneroSelecionado] = useState('')

  const[texto,setTexto]=useState('')
  
  const [sairBarra, setSairBarra] = useState(true)
  const aparecerBarraBotao = () => {
    setSairBarra(false)
   
  }

  const sairBarraBotao = () => {
    setSairBarra(true)
  }

  const [livros, setLivros] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/livros')
      .then((res) => {
        if (!res.ok) throw new Error('erro ao buscar')
        return res.json()
      })
      .then((data) => setLivros(data))
      .catch((err) => console.log(err))
  }, [])

  let valoresFiltrados;

  
  valoresFiltrados = livros.filter((e)=> e.genero.toLowerCase().startsWith(generoSelecionado.toLowerCase()))

  valoresFiltrados = valoresFiltrados.filter((e)=> e.nome.toLowerCase().startsWith(texto.toLowerCase()))

  return (
    <div className="flex flex-col items-center">
      <BarraCima setTexto={setTexto} texto={texto} aparecerBarraBotao={aparecerBarraBotao} setSairBarra={setSairBarra} sairBarra={sairBarra} />
      <CaixaDoLivro livros={valoresFiltrados} />
      <BarraLateral generoSelecionado={generoSelecionado}  setGeneroSelecionado={setGeneroSelecionado} sairBarraBotao={sairBarraBotao} setSairBarra={setSairBarra} sairBarra={sairBarra} />
    </div>
  );
};

export default App;
