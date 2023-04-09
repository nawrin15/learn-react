import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Line from './component/line';
import Rect from './component/rect';
import Circle from './component/circle';
import Ellipse from './component/ellipse.js';
import Polyline from './component/polyline';
import Polygon from './component/polygon';
import Path from './component/path';
import { Path2 } from './component/path2';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/line" element={<Line/>}/>
          <Route path="/rect" element={<Rect/>}/>
          <Route path="/circle" element={<Circle/>}/>
          <Route path="/ellipse" element={<Ellipse/>}/>
          <Route path="/polyline" element={<Polyline/>}/>
          <Route path="/polygon" element={<Polygon/>}/>
          <Route path="/path" element={<Path/>}/>
          <Route path="/path2" element={<Path2/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
