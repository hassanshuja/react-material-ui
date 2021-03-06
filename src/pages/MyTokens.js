import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import placeholder from '../images/150.png';
import Modal from '@material-ui/core/Modal';
import { red } from '@material-ui/core/colors';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function getModalStyle() {
    const top = 5;
    const left = 20;
  return {
    transform: `translate(${left}%, ${top}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display:'block',
    maxWidth: 950,
    '&$checked': {
        color: green[600],
      },
  },
  media: {
    height: 140,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  avatar: {
    backgroundColor: red[500],
  },
  secmedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  setframe: {
      width: 151
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 400,
    height:400,
    float:'left',
    margin: '1rem'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  footer: {
    float:'right'
  },
  carding: {
    display:'flex',
    justifyContent:'center',
    gap: '5rem'
  }

}));

//this is for setting up card functionality
export default function MediaCard() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const [data, setData] = React.useState({});

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  //open modal and set value of each pop up of NFT
  const handleOpen = (val) => {
    console.log(val)
    setData(val)
    setOpen(true);
  };

  //this will close the modal
  const handleClose = () => {
    setOpen(false);
  };

//This is the api data will come from backend
  const apiData = [{
    'title': 'Rabbit #5155', 
  }, {
    'title': 'Rabbit #5156', 
  },
  {
    'title': 'Rabbit #5157', 
  }]

  //This is the pop up open after clicking on card of nft
  const body = (

    <Card className={classes.root} style={modalStyle}>
      {data && data.title ?
        <CardHeader
          title={data.title}
        /> : <CardHeader
        title="Redacted Rabit # 513"
      />}
      <CardMedia
        className={classes.cover}
        image={placeholder}
        title="Live from space album cover"
      />
      <div className={classes.details}>
      
        <CardContent className={classes.content}>
          <Typography variant="subtitle1" style={{fontSize: '12px'}}>
            Transfer NFT
          </Typography>
          <TextField id="outlined-basic" 
                    variant="outlined" fullWidth  
                    placeholder='secret address secret17988787...'
                    />
            <FormGroup row>
            <FormControlLabel
                style={{ marginTop: '19px'}}
                control={<Checkbox color="default" checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                label="I entered the correct address and understand RC is not responsible for incorrect transfers"
            />
            </FormGroup>
            <ButtonGroup color="default" aria-label="outlined primary button group">
                <Button>Transfer</Button>
            </ButtonGroup>
            <Typography variant="subtitle1" style={{fontSize: '12px'}}>
                Update Discord ID
            </Typography>
            <TextField id="outlined-basic" 
                variant="outlined" fullWidth  
                placeholder='discord id (BlackRabbit#123123....)'
            />
            <Typography variant="subtitle1" style={{fontSize: '12px'}}>
                Set your Discord ID here (your full handle - including numbers - like 
                so. YourDiscord #1234) to verify yourself as Redacted club 
                member.In Discord, click on your handle to copy it and then paste it
                here.
            </Typography>
            <ButtonGroup color="default" aria-label="outlined primary button group">
                <Button>Update</Button>
            </ButtonGroup>
        </CardContent>
        <div className={classes.footer}>
            <ButtonGroup color="default" style={{float: 'right',marginRight:' 13px'}} 
                aria-label="outlined primary button group">
                <Button color="secondary" onClick={handleClose}>Close</Button>
            </ButtonGroup>
        </div>
      </div>
      
    </Card>
  );

  return (
    //This is the iteration of all 3 cards on the basis of apidata coming from backend
    <div className={classes.carding}>

{apiData && apiData.map((item, index) => (
             //This does ifre                       
      <Card className={classes.root} key={index}>
        <CardActionArea onClick={() => handleOpen(item)}>
          <CardMedia
          style={{width:250, height:250}}
            className={classes.media}
            image={placeholder}
            title="Rabbit"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card> )  
        )}
    
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
    
  );
}