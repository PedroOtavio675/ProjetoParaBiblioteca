import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const CaixaDoLivro = (props)=>{


  
    return(
      <div className='w-[95vw] flex flex-wrap bg-slate-200 p-2 m-2 rounded-md  justify-center '>
         {props.livros.map((item, index)=>(
        <div key={index} className='m-2'>
      <Card sx={{ maxWidth: 150, height:300, }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.nome}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {item.autor}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {item.genero}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
))}
    </div>
    )
}

export default CaixaDoLivro