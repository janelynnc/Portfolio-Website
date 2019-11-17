import React from 'react';
import ProjectCard from './ProjectCard.js';
import ProjectData from './ProjectData.json';
import Box from '@material-ui/core/Box';
import { Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import CollectionsIcon from '@material-ui/icons/Collections';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
export default function Project(){
    const TagData = ["games","non-games"];
    const tags = TagData.map(tag => <Chip label={tag}/>)
    const cards = ProjectData.map(item => <ProjectCard image={item.image} 
        title={item.title} summary={item.summary} media={item.media} desc={item.desc}></ProjectCard>)
    return(
        <div>
            <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-evenly">
                {cards}
            </Box>
            <SpeedDials/>
        </div>
    );

}

const useStyles = makeStyles(theme => ({
    speedDial: {
      position: 'fixed',
      '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        width:'90%',
        maxWidth:'875px',
        alignItems:'flex-end',
        bottom: theme.spacing(2),
      },
      '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(2),
        left: theme.spacing(2),
      }
    }

  }));
  
  const actions = [
    { icon: <SportsEsportsIcon/>, name: 'Games' },
    { icon: <CollectionsIcon />, name: 'Non-games' },
    { icon: <EmojiSymbolsIcon />, name: 'All' }
  ];
  
  function SpeedDials() {
    const classes = useStyles();
    const [direction, setDirection] = React.useState('up');
    const [open, setOpen] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    return (
          <SpeedDial
            ariaLabel="Filter"
            className={classes.speedDial}
            hidden={hidden}
            icon={<SpeedDialIcon icon={<SearchIcon/>} openIcon={<FilterListIcon/>}/>}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
            direction={direction}
          >
            {actions.map(action => (
              <SpeedDialAction
                className={classes.fab}
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={handleClose}
                delay={1}
              />
            ))}
          </SpeedDial>
    );
  }

