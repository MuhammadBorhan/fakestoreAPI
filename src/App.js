import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const uncreseCount = () => setCount(count + 1)
  return (
    <div>
      <Header count={count}></Header>
      <Products setcount={uncreseCount}></Products>
    </div>
  );
}

export default App;
