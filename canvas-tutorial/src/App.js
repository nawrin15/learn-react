import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Resize from './component/resize';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/canvas-resize" element={<Resize/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
