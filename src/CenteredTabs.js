import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    
  },

});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className='bg'>
        <Paper className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Home" href='/' />
            <Tab label="shop" href='/shop' />
            <Tab label="shop detail" href='/shop-details' />
            <Tab label="pages" />
            <Tab label="contact" />
          </Tabs>
        </Paper>
      </div>
    </>
  );
}
