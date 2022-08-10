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
        <Grid container alignItems="center" justifyContent="center" spacing={10} direction="column">
          <Grid item xs={6} sm={6} md={3}>
              <Reviews />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AverageReviews />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <SentimentAnalysis />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <WebsiteVisitors />
              </Grid>
         </Grid>
       </div>
    </div>
  );
}

export default App;
