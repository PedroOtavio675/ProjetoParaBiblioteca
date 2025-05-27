import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BarraLateral = ()=>{

    return(
        <div className="bg-slate-950 absolute right-0 top-0 h-[100vh] w-[200px] z-9">
        <ArrowBackIcon className='bg-white rounded-md m-2 cursor-pointer hover:bg-slate-200'/>
        </div>
    )
}
export default BarraLateral