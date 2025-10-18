import './App.css';
import { useSelector, useDispatch } from "react-redux";
import {bindActionCreators } from "redux";
import { actionCreators } from "./state/index"

function App() {
  // const state = useSelector((state) => state);
  // console.log("state", state)
  const account = useSelector((state) => state.account);
  console.log("account=", account)

  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);
  // const AC = bindActionCreators(actionCreators, dispatch);
  // console.log("Action Creator ", AC)
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
