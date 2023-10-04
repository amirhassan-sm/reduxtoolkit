import './App.css';
import Cart from './components/Cart';
import ProductsList from './components/ProductsList';
import './Reset.css'
function App() {
  return (
    <div className='maincontainer' >

      <div className='cartBox'>
        
        <Cart/>

      </div>
      <div className="PoductList">
      <ProductsList/>
      </div>
 
    </div>
  );
}

export default App;
