import React from 'react';
import Box from './Box';
import './Card.css'; 

function Boxcard () {
  return(
    <div className = 'boxes'>
      <Box 
        title = 'Title 1'
        subtitle = 'Subtitle 1'
        description = 'Hello Wolrd 1'
        bgcolor = '#ff0001'
      />
      <Box 
        title = 'Title 2'
        subtitle = 'Subtitle 2'
        description = 'Hello Wolrd 2'
        bgcolor = '#ffa500'
      />
      <Box 
        title = 'Title 3'
        subtitle = 'Subtitle 3'
        description = 'Hello Wolrd 3'
        bgcolor = '#fffe01'
      />
      <Box 
        title = 'Title 4'
        subtitle = 'Subtitle 4'
        description = 'Hello Wolrd 4'
        bgcolor = '#008000'
      />
    </div>
  ) 
};

export default Boxcard;