import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ContainedTabs from './ContainedTabs';
import {Link} from "react-router-dom"
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as ITCHIO} from './itchio-logo-textless-white.svg';
export default function Menu() {
  const [value, setValue] = React.useState(0);
  const menuItems = [
    { label: `PORTFOLIO`, path:"/"},
    { label: 'PROJECTS', path:"/Projects"},
    { label: `PUBLICATIONS`, path:"/Publications"}
  ];
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div >
      <div style={{'display':'flex'}}>
        <h1 style = {{color:"black", marginLeft:'1em', marginTop:'auto', marginBottom:'auto'}}>JANELYNN CAMINGUE</h1>
        <img style={{"border": "5px solid black", borderRadius:"50%", "float":"right", "width":"150px",margin:"10px 10px 10px auto"}}src={"https://janelynnc.github.io/Portfolio-Website/images/0.jfif"} alt=""></img>
        <div style={{marginTop:'auto', marginBottom:'10px'}}>
          <a href="https://github.com/janelynnc" target="_blank" style = {{marginRight:'10px'}}>
            <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-535ed.appspot.com/o/flamelink%2Fmedia%2FGitHub-Mark-32px.png?alt=media&token=e96c7107-30da-4e2f-8133-6c173858a803'}/>
          </a>
          <a href="https://jcamingue.itch.io/" target="_blank" style = {{marginRight:'10px'}}>
            <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-535ed.appspot.com/o/flamelink%2Fmedia%2Fitchio-logo-textless-black.png?alt=media&token=6b44ca68-a3fd-4df0-861b-89353c300dc4'} width='36px'/>
          </a>
          <a href="https://www.linkedin.com/in/janelynn-camingue-3a942310a/" target="_blank" style = {{marginRight:'8px'}}>
            <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-535ed.appspot.com/o/flamelink%2Fmedia%2FLI-In-Bug.png?alt=media&token=88ebe917-563a-4dce-b05f-a797ed68f8f1' } width='36px'/>
          </a>
        </div>
      </div>


      <AppBar style = {{backgroundColor:'black', marginBottom:'15px'}} position = 'sticky'>
        <div style={{'display':'flex'}}>
          <Typography type="title" color="primary" align="left" style={{ margin:'auto', marginLeft:'10px' }}>
            Janelynn Camingue
          </Typography>
          <ContainedTabs
            style={{alignSelf:'flex-end'}}
            tabs={menuItems}
            value={value}
            onChange={(e,i) => handleChange(i)}
          />
        </div>
      </AppBar>
    </div>
  );
}
