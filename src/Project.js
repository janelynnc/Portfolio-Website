import React from 'react';
import ProjectCard from './ProjectCard.js';
import ProjectData from './ProjectData.json';
import Box from '@material-ui/core/Box';
export default function Project(){
    const MyConst = React.createContext();
    const cards = ProjectData.map(item => <ProjectCard image={item.image} 
        title={item.title} summary={item.summary} media={item.media} desc={item.desc}></ProjectCard>)
    return(
        <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-evenly">
            {cards}
        </Box>
    );

}