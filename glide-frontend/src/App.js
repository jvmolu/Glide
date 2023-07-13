import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">

      <h1 className="text-3xl font-bold underline">
        Glide
      </h1>

      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>

    </div>
  );
}

export default App;
