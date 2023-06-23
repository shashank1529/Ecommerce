// import { Children } from 'react';
import './App.scss';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,

} from "react-router-dom";
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
const Layout=()=>{
return (
  <div className="app">
    <Navbar/>
<Outlet/>
    <Footer/>
  </div>
)
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>, // Layout ko liyaa...
children:[
  {
path: "/",
element:<Home/>,// ab agr "/ "ye aaya to isme navbar+home ka content+ footer hoga
  },
  {
    path:"/products/:id",
    element: <Products/>,// ab agr "/products/:id" ye aaya to isme navbar+home ka content+ footer hoga
      },
      {
    path:"/product/:id",
    element: <Product/>,
      },
],
  },
]);
function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
