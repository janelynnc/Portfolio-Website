import React from 'react';
import Container from '@material-ui/core/Container';
import './App.css';
import {HashRouter as Router, Route} from "react-router-dom"
import Menu from './Menu.js';
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider} from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Project from "./Project.js"
import ProjectCard from './ProjectCard.js';
import Porfolio from './Portfolio.js'
import { withFirebase} from './Firebase';
import Portfolio from './Portfolio';

const baseTheme = createMuiTheme({
  palette:{
    type: 'light',
    primary:{
      main:'#121212'
    },
    secondary:{
      main:'#03DAC5'
    },
    background:{
      default:'#ffffff'
    },
    text:{
      primary:'#000'
    }
  },
  overrides:{
    MuiTypography:{
      colorTextSecondary:{
        color:"#000"
      }
    },
    MuiDivider:{
      root:{
        height:"5px",
        backgroundColor:"#000"
      }
    },
    MuiTabs:{
      root:{
        minHeight:`10px`
      }
    },
    MuiTab:{
      root:{
        minHeight:`10px`
      }
    },
    MuiSpeedDialIcon:{
      openIconOpen:{
        color:'#adff2f'
      }
    },
    MuiSpeedDialAction:{
      fab:{
        '&:hover':{
          color:'#adff2f'
        }  
      }
    }
  }
});
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      projects: []
    }
  }

  async componentDidMount(){
    let data = await this.props.firebase.GetVal('projects');
    let firelink = await this.props.firebase.GetVal('flamelink/environments/production/content/project/en-US');
    data = data.concat(Object.values(firelink));
    this.setState({projects:data});
  }

  render() {
    return (
    <React.Fragment>
      
        <ThemeProvider theme={baseTheme}>
          <CssBaseline/>
          <Container maxWidth='lg'>
          <Router>

              <Menu></Menu>
                <div>
                  <Route path={"/"} exact component={withFirebase(Portfolio)}/>
                  <Route path={"/Publications"} component={Publications}/>
                  <Route path={"/Projects"} component={withFirebase(Project)}/>
                  {
                    this.state.projects.map((item) => 
                    {
                      if(item.title == null){
                        return;
                      }
                      const path = item.title.replace(/ /g, "-");
                      return(
                        <Route key={item.title} path={`/${path}`} component={()=> 
                          <ProjectCard image={item.image} 
                                      title={item.title}
                                      summary={item.summary}
                                      media={item.media}
                                      desc={item.desc}
                                      type={item.type}
                                      fullCard={true}/>}
                        />
                      );
                    })
                  }
                </div>
                
            </Router>
          </Container>
        </ThemeProvider>
    </React.Fragment>
    );
  }
}



function About(){
  return(
    <div>
      <h2 style={{textAlign:"center"}}>About Me</h2>
      <div>
      <img style={{clipPath:"circle(50% at 50% 50%)", "float":"right", "width":"250px","margin":"10px"}}src={"https://janelynnc.github.io/Portfolio-Website/images/0.jfif"} alt=""></img>
      <h6>I am an energetic and creative first-year master's student attending the University of California, Santa Cruz (UCSC) majoring in Games and Playable Media. As an undergraduate at UCSC, I studied Computer Science: Computer Game Design. I am passionate towards gaming that I decided to pursue it as a career. My dream is to be a technical game designer who will revolutionize visual novels with new technologies like VR and AR. After my internship at 20th Century FOX, I was inspired to pursue my studies to create new and memorable experiences in interactive storytelling.</h6>
      <h6> My favorite type of games are narrative, story-rich RPGs where the player can make choices and sculpt their own character in the game. Of all the games I have played, my favorite game series is the Mass Effect Trilogy, but if we're going into specifics, my favorite game of all time is Mass Effect 3.</h6>
      <h6>My second favorite type of games are visual novels. Some key favorites are from Voltage Inc. and Otomate. I love an exciting romance, and any game where I can take the role of a character and have the option or goal to romance someone is my cup of tea.</h6>
      <h6>When I'm not playing or making games, I like to curl up on the couch with my dog, Cutiepie. She is a lap dog and my personal heater. I also enjoy watching (and critiquing) horror movies because I love a good jump scare. When I have a television in front of me, you can find me watching competition/reality shows like Project Runway, my favorite soap opera, Days of Our Lives, crime shows like NCIS, or comedies like Fresh Off The Boat.</h6>
      </div>
      
    </div>
  );
}

function Publications(){
  return(
    <div>
      <h3>Peer Reviewed Conference and Journal Publications</h3>
      <hr/>
      <ul>
        <li>
			Janelynn Camingue, <i>Edward F. Melcer</i>, and Elin Carstensdottir. (2020). <a href="" target="_blank">“A (Visual) Novel Route to Learning: A Taxonomy of Educational Visual Novels”</a>. In Proceedings of the 15th international conference on the Foundations of Digital Games. FDG ’20, Malta. ACM.
		    </li>
      </ul>
    </div>
  );
}




export default App;
