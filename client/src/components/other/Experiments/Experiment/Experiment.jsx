import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@material-ui/core';
import StartIcon from '@mui/icons-material/Start';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Experiment = ({product}) => { 
    const classes = useStyles();
  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image} title={product.name}/>
    <CardContent>
        <div className={classes.cardContent}>
            <Typography  gutterBottom sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'Port Lligat Sans',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '20px', 
                  color: '#000000',
                  textDecoration: 'none'
                }}>
                {product.name}
            </Typography>
            <div>
            </div>
            <Typography variant='body2' color='textSecondary' sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: '12px',
                  lineHeight: '20px', 
                  color: '#000000',
                  textDecoration: 'none'
                }}>
                {product.description}
            </Typography>
        </div>
    </CardContent>
    <CardActions disableSpacing className={classes.cardActions}>
                <Link to={product.path}><StartIcon/></Link>

    </CardActions>
    </Card>
  )
}

export default Experiment;