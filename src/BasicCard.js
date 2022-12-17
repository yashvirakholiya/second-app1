import  React, { useState, useEffect }  from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import { yellow } from '@material-ui/core/colors';


 const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing(1),
  },
  size:{
    color:'black',
  },
  flex:{
    display:'inline-block',
  }, 
  
  bg:{
    backgroundColor:'yellow',
    height:20,
    width:20,
  }
}));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  
 })); 

  

    

export default function BasicCard() {
  const [breakimage, setBreakimage] = useState([])
  useEffect(() => {
    fetch("http://localhost/phpdemo/get_typomenu.php")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setBreakimage(result)
        },
        (error) => {

        }
      )
  }, [])
  return (
    <>
    
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="black" fontWeight="bold" gutterBottom>
          Product Name Goes Here
        </Typography>
        <Typography variant="h5" component="div" color="yellow">
          <StarIcon></StarIcon>
          <StarIcon></StarIcon>
          <StarIcon></StarIcon>
          <StarHalfIcon></StarHalfIcon>
          <StarOutlineIcon></StarOutlineIcon>
        </Typography>
        <Typography sx={{  fontSize:16 }} color="black">
          $ 150.00
        </Typography>
        <Typography variant="body2">
        Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc ipsum <br/>et, labore clita lorem magna duo dolor no sea Nonumy
          <br />
        
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary" >
          <div className='flex'>
          <div className='size'>Size:
          <MenuItem>
        {
          breakimage.map((item) => {
            return (
              
              <div className='iname'>
                <div className={'pname'}>
               <h5> <Checkbox fontSize="small"/> {item.size}</h5>
                </div>
              </div>
         
                    
            )
          })
        }
         </MenuItem>
         </div>
          </div>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <div>Color:</div>
          <MenuItem>
        {
          breakimage.map((item) => {
            return (
              
              <div className='iname'>
                <div className={'pname'}>
               <h5> <Checkbox fontSize="small"/> {item.color}</h5>
                </div>
              </div>
             
                    
            )
          })
        }
         </MenuItem>
        </Typography>
        
  
      </CardContent>
      <CardActions >
        <div className='bg'><Button size="small" ><ShoppingCartIcon></ShoppingCartIcon>  Add to Cart</Button></div>
      </CardActions>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Share On: <FacebookIcon></FacebookIcon> <TwitterIcon></TwitterIcon><LinkedInIcon></LinkedInIcon><PinterestIcon></PinterestIcon>
        </Typography>
    </Card>
    </>
  );
}


