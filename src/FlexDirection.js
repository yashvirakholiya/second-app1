import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import DoneIcon from '@mui/icons-material/Done';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function FlexDirection() {
  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
          justifyContent:'space-evenly',
          
        }}
      >
        <Item>
          <div>
              <DoneIcon></DoneIcon>
          </div>
          <div><h5>Quality Product</h5></div>
        </Item>
        <Item>
          <div>
              <LocalShippingIcon></LocalShippingIcon>
          </div>
          <div><h5>Free Shipping</h5></div>
        </Item>
        <Item>
          <div>
              <MultipleStopIcon></MultipleStopIcon>
          </div>
          <div><h5>14-Day Return</h5></div>
        </Item>
        <Item>
          <div>
              <AddIcCallIcon></AddIcCallIcon>
          </div>
          <div><h5>24/7 Support</h5></div>
        </Item>
       
      </Box>
      
      
    </div>
  );
}
