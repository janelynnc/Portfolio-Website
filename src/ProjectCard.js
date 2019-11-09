import React , { useLayoutEffect }from 'react';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyle = theme => ({
    card: {
      flexGrow:'1',
      flexShrink:'0',
      flexBasis:'250px',
      margin:'8px',
      transition: 'all 1s linear'
    },
    media: {
        height:'200px',
        width:'auto'
    },
    full_card:{
        flexBasis:'auto',
        transition: 'all 1s linear'
    },
  })

class ProjectCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fullCard:false
        }
        this.myRef = React.createRef();
        this.handleToggle = this.handleToggle.bind(this);
    }
     

     handleToggle(){
        this.setState({fullCard:!this.state.fullCard});
     }

     componentDidUpdate(prevProps, prevState, snapshot){
         if(this.state.fullCard != prevState.fullCard){
            window.scrollTo(0, this.myRef.current.offsetTop);
         }
     }
      render() {
        const { classes } = this.props;
        let Media,Expand,Message;
        if(!this.state.fullCard){
            Media = <CardMedia className={classes.media} image={this.props.image} title={this.props.title}/>
            Expand = <Button size="small" color="secondary" onClick={this.handleToggle}>
                        Learn More
                     </Button>
            Message = this.props.summary
        }else{
            Media = <CardMedia component={this.props.media.type} style={this.props.media.css} image={this.props.media.src} title={this.props.title}/>
            Expand = <Button size="small" color="secondary" onClick={this.handleToggle}>
                        Collapse
                     </Button>
            Message = this.props.desc
        }

        return (
          <Card ref={this.myRef} className={this.state.fullCard ? classes.full_card:classes.card}>
            <CardActionArea>
              {Media}
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {Message}
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
