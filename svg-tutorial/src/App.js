import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Line from './component/line';
import Rect from './component/rect';
import Circle from './component/circle';
import Ellipse from './component/ellipse.js';
import Polyline from './component/polyline';
import Polygon from './component/polygon';
import Path from './component/path';
import { Path2 } from './component/path2';
import Circle1 from './component/circle1';
import AnimateCircle1 from './component/animateCirle';
import "./App.css";
import AnimateCircle2 from './component/animateCirle2';
import AnimateCircle3 from './component/animateCirle3';
import AnimateCircle4 from './component/animateCirle4';
import Text1 from './component/text1';
import DefsModel from './component/defs_model';
import G_Svg from './component/g_svg';
import DeepTree from './component/deep';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/line" element={<Line/>}/>
          <Route path="/rect" element={<Rect/>}/>
          <Route path="/circle" element={<Circle/>}/>
          <Route path="/circle1" element={<Circle1/>}/>
          <Route path="/ellipse" element={<Ellipse/>}/>
          <Route path="/polyline" element={<Polyline/>}/>
          <Route path="/polygon" element={<Polygon/>}/>
          <Route path="/path" element={<Path/>}/>
          <Route path="/path2" element={<Path2/>}/>
          <Route path="/text1" element={<Text1/>}/>
          <Route path="/defs" element={<DefsModel/>}/>
          <Route path="/g" element={<G_Svg/>}/>
          <Route path="/deeptree" element={<DeepTree/>}/>
          <Route path="/animate1" element={<AnimateCircle1/>}/>
          <Route path="/animate2" element={<AnimateCircle2/>}/>
          <Route path="/animate3" element={<AnimateCircle3/>}/>
          <Route path="/animate4" element={<AnimateCircle4/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
