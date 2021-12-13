import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios'

const ITEM_HEIGHT = 48;
const baseurl = "http://localhost:3000/editcandidate/";
const addinterview = "http://localhost:3000/AddInterviewed/";

export default function LongMenu(props) {  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 const edit = () => {
      console.log(props.id)
      window.location.replace(baseurl+props.id);
  };

  const add =() => {
   window.location.replace(addinterview+props.id)
  }

  
  const deletedata = () => {
    var accessToken = localStorage.getItem("access")
    const result = axios.create({
      headers: {
      Authorization:`Bearer ${accessToken}`
      }
    });
    var url = "https://pg-backend-server.herokuapp.com/api/CandidateDataDelete/"+props.id;
    var r = window.confirm("Are you sure? Data cannot be reverted");
    if (r == true) {
     result
      .delete(`${url}`)
      .then(() => {
        alert("Post deleted!");
        window.location.reload();
      });
    } 
};


  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem onClick={edit} style={{paddingLeft:50}}>
            Edit
          </MenuItem>
          <br></br>
          <MenuItem onClick={deletedata} style={{paddingLeft:50}}>
            Delete
          </MenuItem>
          <MenuItem onClick={add} style={{paddingLeft:50}}>
            Add Interview
          </MenuItem>
      </Menu>
    </div>
  );
}
