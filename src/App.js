import './App.css';
import Sidebar from './components/Sidebar'; 
import Reviews from './components/Reviews';
import { Grid, Typography } from '@mui/material'
import WebsiteVisitors from './components/WebsiteVisitors';
import AverageReviews from './components/AverageReviews'
import SentimentAnalysis from './components/SentimentAnalysis';
function App() {
  
  return (
    <div className="App">
      <Typography color="primary" variant="h2">Dashboard</Typography>
      <Sidebar />
      <div>
        <Grid container spacing={2} rowSpacing={12} columnSpacing={{xs: 1, sm: 2, md: 3}} >
          <Grid item xs={6} >
              <Reviews />
            </Grid>
            <Grid item xs={6}>
              <AverageReviews />
            </Grid>
            <Grid item xs={6}>
                <SentimentAnalysis />
            </Grid>
            <Grid item xs={6}>
              <WebsiteVisitors />
              </Grid>
          </Grid>
       </div>
    </div>
  );
}

export default App;
