import './App.css';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals, getCartItems } from './feature/cart/cartslice';
import { useEffect } from 'react';
import Modal from './components/Modal';

// step-1: setup Store
// step-2: add provider in App.js
// step-3: setup slice

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  useEffect(() => {
    dispatch(getCartItems('abc'));
  }, []);
  
  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  
  return (
    <main>
      {isOpen && <Modal/>} 
      <Navbar/>
      <CartContainer/>
    </main>
  );
}

export default App;
