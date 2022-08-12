import './App.css';
import Sidebar from './components/Sidebar'; 
import Reviews from './components/Reviews';
import { Grid, Typography } from '@mui/material'
import WebsiteVisitors from './components/WebsiteVisitors';
import AverageReviews from './components/AverageReviews'
import SentimentAnalysis from './components/SentimentAnalysis';
import React, { Box } from '@mui/material'

function App() {
  
  return (
    <div className="App">
      <Typography color="primary" variant="h2">Dashboard</Typography>
      <Sidebar />
        <Grid container spacing={6} alignItems="center" justifyContent="center" direction="row">
          <Grid item>
              <Reviews />
            </Grid>
            <Grid item>
              <AverageReviews />
            </Grid>
            <Grid item>
                <SentimentAnalysis />
            </Grid>
            <Grid item>
              <WebsiteVisitors />
              </Grid>
        </Grid>
    </div>
  );
}

export default App;
