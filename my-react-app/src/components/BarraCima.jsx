import { TextField } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export {};

const BarraCima = () => {
  return (
    <div className="bg-slate-600  w-[100%] ">
      <div className="w-[100vw] h-[40px] flex items-center justify-center">
        <h1>Biblioteca</h1>
      </div>
      <div className="w-[100vw]  h-[60px] flex items-center justify-center ">
        <div className="absolute">
<TextField id="outlined-basic" 
        label="Pesquisar" variant="outlined" />
        </div>
        <div className="bg-slate-400 absolute right-4 rounded-md p-2">
    <MenuIcon className=""/>
        </div>
    
      </div>
    </div>
  );
};

export default BarraCima;
