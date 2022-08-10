import './App.css';
import Sidebar from './components/Sidebar'; 
import Reviews from './components/Reviews';
import { Grid } from '@mui/material'
import WebsiteVisitors from './components/WebsiteVisitors';
import AverageReviews from './components/AverageReviews'
import SentimentAnalysis from './components/SentimentAnalysis';
function App() {
  
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <Sidebar />
      <div>
        <Grid container alignItems="center" justifyContent="center" spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
              <Reviews />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AverageReviews />
            </Grid>
            </Grid>
          <Grid container alignItems="center" justifyContent="center" spacing={3}>
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
