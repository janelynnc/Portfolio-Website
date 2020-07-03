import React from 'react';
import ProjectCard from './ProjectCard.js';
import ProjectData from './ProjectData.json';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

let cards = ProjectData.projects.reverse().map(item => <ProjectCard key={item.title} image={item.image} 
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

    async componentDidMount(){
      this.mounted = true;
      let data = await this.props.firebase.GetVal('projects');
      let firelink = await this.props.firebase.GetVal('flamelink/environments/production/content/project/en-US');
      if(this.mounted){
        cards = data.reverse().map(item => <ProjectCard key={item.title} image={item.image} 
          title={item.title} summary={item.summary} media={item.media} desc={item.desc} type={item.type} fullCard={false}></ProjectCard>);
        if(firelink){
          let firelinkedCards = Object.values(firelink).map(item => <ProjectCard key={item.title} image={item.image} 
            title={item.title} summary={item.summary} media={item.media} desc={item.desc} type={item.type} fullCard={false}></ProjectCard>);
          cards = cards.concat(firelinkedCards);
        }
        this.setState({display:cards});
      }
    }

    handleChange(event){
      let type = event.target.value;
      this.setState({
        display:cards.filter(card => card.props.type === type || type === "any"),
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

    componentWillUnmount(){
      this.mounted = false;
    }
}
export default Project

