import { Link } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import ProductsList from './components/ProductsList';
import './Reset.css'
function App() {
  return (
    <div className='maincontainer' >

      <div className='cartBox'>
        
        {/* <Cart/> */}
       
        {/* <Link  to={"/cart"}>sabade kharid</Link> */}

      </div>
      <div className="PoductList">
      {/* <ProductsList/> */}
      <Link to={"/products"}>products</Link>

      </div>
 
    </div>
  );
}

export default App;
