import  React, { useState, useEffect,item }  from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import RecipeReviewCard from './RecipeReviewCard';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
  pname:{
    display:'flex',
  }
}));
 
const Item = styled(Paper)(({ theme }) => ({
 backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
 ...theme.typography.body2,
 padding: theme.spacing(1),
 textAlign: 'center',
 color: theme.palette.text.secondary,
})); 


export default function TypographyMenu(props) {
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
     <Box sx={{ flexGrow: 1 }}></Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
        <div>

    
      <h4>FILTER BY PRICE -----</h4>
     
    <Paper sx={{ width: 300 }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
             <Checkbox fontSize="small"  />
        
          </ListItemIcon>
          <Typography variant="inherit">All Price</Typography>
        </MenuItem>
        
        {
                breakimage.map((item) => {
                  return (
                    <MenuItem>
                    <div className='iname'>
                      <div className={'pname'}>
                     <h5> <Checkbox fontSize="small"/> {item.name}</h5>
                      </div>
                    </div>

                    </MenuItem>            
                  )
                })
              }
        
        
      </MenuList>
    </Paper>  
   
   
    </div>
    <div>

    
<h4>FILTER BY COLOR -----</h4>

<Paper sx={{ width: 300 }}>
<MenuList>
  <MenuItem>
    <ListItemIcon>
       <Checkbox fontSize="small"  />
  
    </ListItemIcon>
    <Typography variant="inherit">All color</Typography>
  </MenuItem>
  
  {
          breakimage.map((item) => {
            return (
              <MenuItem>
              <div className='iname'>
                <div className={'pname'}>
               <h5> <Checkbox fontSize="small"/> {item.color}</h5>
                </div>
              </div>

              </MenuItem>            
            )
          })
        }
  
  
</MenuList>
</Paper>  


</div>
<div>

    
<h4>FILTER BY SIZE -----</h4>

<Paper sx={{ width: 300 }}>
<MenuList>
  <MenuItem>
    <ListItemIcon>
       <Checkbox fontSize="small"  />
  
    </ListItemIcon>
    <Typography variant="inherit">All size</Typography>
  </MenuItem>
  
  {
          breakimage.map((item) => {
            return (
              <MenuItem>
              <div className='iname'>
                <div className={'pname'}>
               <h5> <Checkbox fontSize="small"/> {item.size}</h5>
                </div>
              </div>

              </MenuItem>            
            )
          })
        }
  
  
</MenuList>
</Paper>  


</div>
     {/* <div>
    <h4>FILTER BY COLOR -----</h4>
    <Paper sx={{ width: 230 }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <Checkbox fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">All Color</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Checkbox fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Black</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Checkbox fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
          White
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Checkbox fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
          Red
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
    </div> */}
   {/*  <div>
      <h4>FILTER BY SIZE -----</h4>
    <Paper sx={{ width: 230 }}>
      <MenuList>
        
        <MenuItem>
          <ListItemIcon>
            <Checkbox fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">All Size</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Checkbox fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            XS
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Checkbox fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            S
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Checkbox fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            M
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Checkbox fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            L
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
    </div> */} 
    
        </Grid>
        <Grid item xs={9}>
        <RecipeReviewCard></RecipeReviewCard>
        </Grid>
        </Grid>

    
    
    </>
  );
}
