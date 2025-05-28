import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';

const BarraLateral = (props)=>{

    
    return(
        <div
        
        className={props.sairBarra ? "invisible" : "bg-slate-950 rounded-l-md absolute right-0 top-0 h-[100vh] w-[250px] z-9"}>
        <ArrowBackIcon 
       onClick={props.sairBarraBotao}
        className='bg-white rounded-md m-2 cursor-pointer hover:bg-slate-200'/>

        <ul className='text-black bg-slate-200  w-[100%] flex items-center justify-center'>
            <li className=''>Categoria:<select className='' name="" id="">
                <option value="todos">todos</option>
                <option value="Romance">Romance</option>
<option value="Ficção Científica">Ficção Científica</option>
<option value="Fantasia">Fantasia</option>
<option value="Mistério">Mistério</option>
<option value="Suspense">Suspense</option>
<option value="Terror">Terror</option>
<option value="Aventura">Aventura</option>
<option value="Drama">Drama</option>
<option value="Biografia">Biografia</option>
<option value="História">História</option>
<option value="Autoajuda">Autoajuda</option>
<option value="Clássico">Clássico</option>
<option value="Poesia">Poesia</option>
<option value="Humor">Humor</option>
<option value="Infantil">Infantil</option>
                </select></li>
        </ul>
        </div>
    )
}
export default BarraLateral