import { createBrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";
import ProductsList from "../components/ProductsList";
import App from "../App";
import config from "../data/restAPI.json"
import Loading from "../components/Loading";


const mainroute = createBrowserRouter([
    {
        element: <Loading />,
        children: [
            {
                path: "/products", element: <ProductsList />,
                 loader: async()=>{return fetch(`${config.API}/products`)},
            },
                { path: "/cart", element: <Cart /> },

        ],

    },
])
export default mainroute