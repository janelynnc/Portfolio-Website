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
    { label: 'Projects', path:"/Projects"},
    { label: 'About', path:"/About" }
  ];
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div >
      <Link to="/">
        <Logo id="logo"  onClick={() => handleChange(0)}/>
      </Link>
      <Link to="/" variant="inherit">
        <ITCHIO id="itchio"/>
      </Link>

      <AppBar style = {{'background-color':'#fff', 'margin-bottom':'15px'}} position = 'sticky'>
        <div style={{'display':'flex'}}>
          <Typography type="title" color="primary" align="left" style={{ margin:'auto', marginLeft:'10px' }}>
            Janelynn Camingue
          </Typography>
          <ContainedTabs
            style={{'align-self':'flex-end'}}
            tabs={menuItems}
            value={value}
            onChange={(e,i) => handleChange(i)}
          />
        </div>
      </AppBar>
    </div>
  );
}
