import './App.css';
import ClassCounterOne from './components/useEffect/ClassCounterOne';
import ClassCounterOne_2 from './components/useEffect/ClassCounterOne_2';
import ClassMouse from './components/useEffect/ClassMouse';
import HookCounterOne from './components/useEffect/HookCounterOne';
import HookCounterOne_2 from './components/useEffect/HookCounterOne_2';
import HookMouse from './components/useEffect/HookMouse';
import MouseContainer from './components/useEffect/MouseContainer';
import ClassCounter from './components/useState/ClassCounter';
import ClassCounterTwo from './components/useState/ClassCounterTwo';
import HookCounter from './components/useState/HookCounter';
import HookCounterFour from './components/useState/HookCounterFour';
import HookCounterThree from './components/useState/HookCounterThree';
import HookCounterTwo from './components/useState/HookCounterTwo';

function App() {
  return (
    <div className="App">
        {/* <ClassCounter /> */}
        {/* <HookCounter/> */}
        {/* <HookCounterTwo/> */}
        {/* <ClassCounterTwo /> */}
        {/* <HookCounterThree /> */}
        {/* <HookCounterFour/> */}
        {/* <ClassCounterOne /> */}
        {/* <HookCounterOne/> */}
        {/* <ClassCounterOne_2 /> */}
        {/* <HookCounterOne_2/> */}
        {/* <ClassMouse/> */}
        {/* <HookMouse/> */}
        <MouseContainer/>
    </div>
  );
}

export default App;
