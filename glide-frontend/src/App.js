import './App.css';
import Slider from '@mui/material/Slider';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Glide
      </h1>

      {/* Testing MUI */}
      <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />

    </div>
  );
}

export default App;
