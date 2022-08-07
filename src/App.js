import './App.css';
import Sidebar from './components/Sidebar'; 
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <Sidebar />
      <Reviews />

    </div>
  );
}

export default App;
