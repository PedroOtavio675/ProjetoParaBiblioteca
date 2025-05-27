import "./components/caixaDolivro";
import "./index.css";
import "./components/BarraCima";
import BarraCima from "./components/BarraCima";
import CaixaDoLivro from "./components/caixaDolivro";
import BarraLateral from "./components/BarraLatral";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <BarraCima />
      <CaixaDoLivro />
      {/* <BarraLateral /> */}
    </div>
  );
};

export default App;
