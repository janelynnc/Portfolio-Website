import React from 'react';
import PortfolioItem from './PortfolioItem.js';
import Data from './PortfolioData.json';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

let cards = Data.reverse().map(item => <PortfolioItem key={item.title} image={item.image} 
  title={item.title} summary={item.summary} media={item.media} desc={item.desc} type={item.type} fullCard={false}></PortfolioItem>)
class Portfolio extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        type:"any",
        pro:[],
        serious:[],
        passion:[]
      }
    }

    async componentDidMount(){
      this.mounted = true;
      let firelink = await this.props.firebase.GetVal('flamelink/environments/production/content/project_copy_1/en-US');
      let pro = []
      let serious = []
      let passion = []
      if(this.mounted){
        if(firelink){
          Object.values(firelink).forEach(item => {
          const element = <PortfolioItem key={item.title} image={item.image} 
          title={item.title} summary={item.summary} type={item.type} override={item.override}></PortfolioItem>
          if(item.type == "pro"){
            pro.push(element)
          }else if(item.type == "serious"){
            serious.push(element)
          }else{
            passion.push(element)
          }
        });
          
        }
        this.setState({
          pro:pro,
          serious:serious,
          passion:passion
        });
        console.log(this.state.pro)
      }
    }

    render() {
      return(
        <div>
      <Box display="flex" flexDirection="column" flexWrap="wrap-reverse" justifyContent="space-evenly">
      <Typography gutterBottom variant="h4" component="h2">
           Professional Game Development
      </Typography>
        {this.state.pro}
        <Divider />
        <Typography gutterBottom variant="h4" component="h2">
           Serious Game Development
        </Typography>
        {this.state.serious}
        <Divider />

        <Typography gutterBottom variant="h4" component="h2">
           Passion Projects
        </Typography>
        {this.state.passion}
      </Box>
        </div>
      );
    }

    componentWillUnmount(){
      this.mounted = false;
    }
}
export default Portfolio

