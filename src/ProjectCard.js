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
    card: {
      flexGrow:'1',
      flexShrink:'0',
      flexBasis:'30%',
      minWidth:'250px',
      margin:'8px',
      transition: 'all 0.5s linear',
      display:"flex",
      flexFlow:"column",
      justifyContent:"space-between"
    },
    media: {
        height:'200px',
        width:'auto'
    },
    full_card:{
        marginBottom:'10px',
        flexBasis:'auto',
        zIndex:'2000'
    },
  })

class ProjectCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fullCard:props.fullCard,
            path:props.title.replace(/ /g, "-"),
            goto:null
        }
        this.myRef = React.createRef();
        this.handleToggle = this.handleToggle.bind(this);
    }
     

     handleToggle(){
        if(this.state.fullCard){
          this.setState({goto:'/Projects'});
        }else{
          this.setState({goto:this.state.path});
        }
        
     }

     componentDidUpdate(prevProps, prevState, snapshot){

     }
      render() {
        const { classes } = this.props;
        let Media,Expand,Message;
        if(!this.state.fullCard){
            Media = <CardMedia className={classes.media} title={this.props.title}><LazyLoadImage style={{width:"100%",height:"100%"}} src={this.props.image}/></CardMedia>
            Expand = <Button size="small" color="secondary" component={Link} to={this.state.path}>
                        Learn More
                     </Button>
            Message = this.props.summary
        }else{
            Media = <CardMedia component={this.props.media.type} style={this.props.media.css} image={this.props.media.src} title={this.props.title}/>
            Expand = <Button size="small" color="secondary" component={Link} to={"/Projects"}>
                        Return To Projects
                     </Button>
            Message = this.props.desc
        }

        if(this.state.goto != null){
          return (<Redirect to={this.state.goto}/>);
        }

        return (
          <Card ref={this.myRef} raised={true} className={this.state.fullCard ? classes.full_card:classes.card}>
            <CardActionArea onClick={this.handleToggle}>
              {Media}
              <CardContent >
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {ReactHtmlParser(Message)}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {Expand}
            </CardActions>
          </Card>
        );
      }
}

export default withStyles(useStyle)(ProjectCard);
