import React, { useState, useEffect } from 'react';
//import './BreakpointDown.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import { Icon } from '@material-ui/core';
import img1 from './images/cat-1.jpg';
import img2 from './images/cat-2.jpg';
import img3 from './images/cat-3.jpg';
import img4 from './images/cat-4.jpg';




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

}));


function BreakpointDown(props) {
  const classes = useStyles()
  const [breakimage, setBreakimage] = useState([])
  useEffect(() => {
    fetch("http://localhost/phpdemo/get_breakimage.php")
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
    <div className={classes.root}>
      <Typography variant="subtitle1"></Typography>
      <div className={classes.container}>
        <Hidden>
          <Paper className={classes.paper}><Icon></Icon>
            <div className={'bimage'} >
            <Grid container>
              {
                breakimage.map((item) => {
                  return (
                    <Grid item md={3}>
                    <div className='iname'>
                      <img src={'http://localhost/phpdemo/upload/' + item.image}></img>
                      <div className={'pname'}>
                        <h5>{item.name}</h5>
                        <h6>{item.product}</h6>
                      </div>
                    </div>

                    </Grid>
                  )
                })
              }
              </Grid>
            </div>

          </Paper>
        </Hidden>
      </div>
    </div>

  )
}

BreakpointDown.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(BreakpointDown);
