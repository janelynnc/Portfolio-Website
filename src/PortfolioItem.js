import React from 'react';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Redirect,Link} from "react-router-dom"
import ReactHtmlParser from 'react-html-parser';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const useStyle = theme => ({
    item: {
      flexGrow:'1',
      flexShrink:'0',
      flexBasis:'30%',
      minWidth:'250px',
      margin:'8px',
      transition: 'all 0.5s linear',
      display:"flex",
      flexFlow:"row"
    },
    media: {
        maxWidth: '100%',
    }
  })

class PortfolioItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fullCard:props.fullCard,
            path:props.title.replace(/ /g, "-"),
        }
        this.myRef = React.createRef();
    }
     
      render() {
        const { classes } = this.props;
        let Media,Message;
        Media = <img className={classes.media}  src={this.props.image}/>
        Message = this.props.summary


        if(this.state.goto != null){
          return (<Redirect to={this.state.goto}/>);
        }

        return (
          <Card ref={this.myRef} raised={true} className={classes.item} elevation={3}>
              <div style={{maxWidth:"50%"}}>{this.props.override? ReactHtmlParser(this.props.override):Media}</div>
              
              <div style={{marginLeft:"20px", marginRight:"20px"}}>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {ReactHtmlParser(Message)}
                </Typography>
              </div>
          </Card>
        );
      }
}

export default withStyles(useStyle)(PortfolioItem);
