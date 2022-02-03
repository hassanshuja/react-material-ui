import React from "react";
import { AppBar, Toolbar, IconButton, Button ,Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, BrowserRouter as Router } from "react-router-dom";
import img from '../images/logo.png';
import { useHistory } from "react-router-dom";

const handleButtonPress = () => {
  console.log("button pressed");
}
const Navbar = () => {
  const classes = useStyles();
  let history = useHistory();

  function mytokens() {
    //console.log(e.target.href)
    history.push('mytokens');
  }

  function mint() {
    //console.log(e.target.href)
    history.push('/');
  }

  function marketplace() {
    //console.log(e.target.href)
    history.push('/marketplace');
  }

  return (
    <Router>
      <AppBar position="static" style={{background: '#000' }}>
        <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <img src={img} alt="logo" style={{width: 50}} />
        </Typography>
          <div className={classes.navlinks}>
          <Button
            variant='contained'
            onClick={() => {
                handleButtonPress();
            }}
          >
            Connect Wallet
          </Button>
            <Link className={classes.link} to="/" alt="" onClick={mint}>
              Mint
            </Link>
            <Link className={classes.link} to="/mytokens"  onClick={mytokens}>
              My Tokens
            </Link>
            <Link className={classes.link} to="/marketplace" onClick={marketplace}>
              Marketplace
            </Link>
          </div>
          {/* <IconButton
            className={classes.menuButton}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            App Heading
          </Typography>
          <Link className={classes.link} to="/mint">
            Mint
          </Link>
          <Link className={classes.link} to="/mytokens">
            My Tokens
          </Link>
          <Link className={classes.link} to="/marketplace">
            Marketplace
          </Link> */}
        </Toolbar>
      </AppBar>
    </Router>
  );
};

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   link: {
//     color: "white",
//     textDecoration: "none",
//   },
// }));
const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));


export default Navbar;
