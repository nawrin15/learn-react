import './App.css';
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
        <HookCounterFour/>
    </div>
  );
}

export default App;
