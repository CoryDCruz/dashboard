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
        <Grid container spacing={10} alignItems="center" justifyContent="center" direction="column">
          <Grid item  xl={6} md={6} sm={12} xs={6}>
              <Reviews />
            </Grid>
            <Grid item  xl={6} md={6} sm={12} xs={6}>
              <AverageReviews />
            </Grid>
            <Grid item  xl={6} md={6} sm={12} xs={6}>
                <SentimentAnalysis />
            </Grid>
            <Grid item  xl={6} md={6} sm={12} xs={6}>
              <WebsiteVisitors />
              </Grid>
        </Grid>
    </div>
  );
}

export default App;
