import React from 'react';
import {Button} from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

const CommentsContainer = () => {
  // const {activeGroup, setActiveGroup} = props
  return (
    <div className='container CommentsContainer'>
      <Button id="comment" variant="contained" color="deactivateAlt" className='vertical-button'><ModeCommentIcon/> Comentario</Button>
      <Button id="atras-comments" variant="contained" color="secondary" className='vertical-button'><ArrowBackIcon/> Retroceder</Button>
      <Button id="adelante-comments" variant="contained" color="secondary" className='vertical-button'><ArrowForwardIcon/> Avanzar</Button>
      <Button  variant="contained" color="secondary" className='vertical-button'><ArrowForwardIcon/> Avanzar</Button>
    </div>
  );
}

export default CommentsContainer;