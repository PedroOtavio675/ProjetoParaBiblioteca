import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const CaixaDoLivro = ()=>{

    return(
      <div className='w-[95vw] bg-slate-200 p-2 m-2 rounded-md'>
        <div className=''>
      <Card sx={{ maxWidth: 150 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Nome
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Autor(a)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
    )
}

export default CaixaDoLivro