import { TextField } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export {};

const BarraCima = (props) => {
  

  return (
    <div className="bg-slate-600  w-[100%] ">
      <img src="http://localhost:3000/public/shadow.png"  />
      <div className="w-[100vw] h-[40px] border-b flex items-center justify-center">
        <h1>Biblioteca</h1>
      </div>
      <div className="w-[100vw]  h-[80px] flex items-center justify-center ">
        <div className="absolute">
<TextField id="outlined-basic" 
        label="Pesquisar" variant="outlined"
        value={props.texto}
        onChange={(e)=> props.setTexto(e.target.value)}
        />

        </div >

      
        <div 
          onClick={props.aparecerBarraBotao}
        className="bg-slate-400 absolute right-4 rounded-md p-2">
    <MenuIcon 
   
    className=""/>
        </div>
    
      </div>
    </div>
  );
};

export default BarraCima;
