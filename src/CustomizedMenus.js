import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Categories
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            Dresses
          </ListItemIcon>
          
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            Shirt
          </ListItemIcon>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            Jeans
          </ListItemIcon>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            Swimwear
          </ListItemIcon>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            Sleepwear
          </ListItemIcon>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            Sportwear
          </ListItemIcon>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            Jumpsuit
          </ListItemIcon>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            Blazer
          </ListItemIcon>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            Jacket
          </ListItemIcon>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            Shoes
          </ListItemIcon>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
