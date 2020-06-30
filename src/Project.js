import React from 'react';
import ProjectCard from './ProjectCard.js';
import ProjectData from './ProjectData.json';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const cards = ProjectData.reverse().map(item => <ProjectCard image={item.image} 
  title={item.title} summary={item.summary} media={item.media} desc={item.desc} type={item.type} fullCard={false}></ProjectCard>)
class Project extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        type:"any",
        display:cards
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
      let type = event.target.value;
      this.setState({
        display:cards.filter(card => card.props.type == type || type == "any"),
        type:type
      });
    }
    render() {
      return(
        <div>
        
      <FormControl variant="outlined" fullWidth={true}>
        <InputLabel id="demo-simple-select-outlined-label">
          Filter by type
        </InputLabel>
        <Select
          labelId="simple-select-outlined-label"
          id="simple-select-outlined"
          onChange={this.handleChange}
          defaultValue={"any"}
        >
          <MenuItem value={"any"}>
            <em>Any</em>
          </MenuItem>
          <MenuItem value={"game"}>Games</MenuItem>
          <MenuItem value={"non-game"}>Non-games</MenuItem>
        </Select>
      </FormControl>
      <Box display="flex" flexDirection="row" flexWrap="wrap-reverse" justifyContent="space-evenly">
        {this.state.display}
      </Box>
        </div>
      );
    }
}
export default Project

