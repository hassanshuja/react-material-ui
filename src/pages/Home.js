import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {withRouter} from 'react-router';



const Home = () => {

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      style={{ minHeight: '100vh', marginTop: '2rem' }}
    >

      <Grid item xs={6}>
        <img src="https://via.placeholder.com/150" />
        <Typography variant="h4" component="h4">
          Minting Goes Live: Dec 4, 2022 5 PM UTC
        </Typography>
      </Grid>   
      <Grid item xs={5}>
        <Typography variant="h6" component="h6" style={{ marginTop: '1rem' }}>
          1337 Rabbits for 42 sSCRT each (PUBLIC MINT REOPENS DEC 7, 5 PM UTC - WHITELIST MINT STILL OPEN)
        </Typography>
      </Grid>
      <Grid item xs={2} style={{ marginTop: '2rem' }}>
        <Button
            style={{ width: '10rem' , color:'#fff', background:'#000' }}
              variant='contained'
            >
              MINT
        </Button>
      </Grid>
      <Grid item xs={2} style={{ marginTop: '2rem'}}>
        <Button
         style={{ width: '10rem' , color:'#fff', background:'#000' }}
              variant='contained' 
            >
              REFRESH
              REMAINING
        </Button>
      </Grid>
      <Grid item xs={2} style={{ marginTop: '2rem'}}>
        <Button
          style={{width: '10rem' , color:'#fff', background:'#000' }}
              variant='contained'
            >
              VIEW YOUR NFTS
        </Button>
      </Grid>
    </Grid> 
  );
};

export default withRouter(Home);
