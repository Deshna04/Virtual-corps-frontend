import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import './note.css';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Grid from '@material-ui/core/Grid';


const Note = (props) => {
  const del = () =>{
    props.deleteItem(props.id);
  }
    return (
  <>
 
    <div className = "note_div shadow p-3 mb-5 col-sm-3  " >
        <h1 className = "text-center title"> {props.title}</h1><br/>
        <p> {props.content}</p>
        <p> <FiberManualRecordIcon/>Status     
        <Button variant="contained" color="secondary" size="small">View Detail</Button>
        {/* <button className = "text-right"  onClick={del}>< DeleteOutlineIcon/></button> */}
        <IconButton color="secondary" ><DeleteIcon /></IconButton></p>

    </div>
    
  </>
    );
  }
  
  export default Note;