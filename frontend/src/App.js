import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import WebFont from 'webfontloader';
import React from 'react';
import Header from './component/layout/Header/Header';
import Footer from './component/layout/Footer/Footer';
import Home from './component/Home/Home.js';
import ProductDetails from "./component/Product/ProductDetails";
import Loader from './component/layout/Loader/Loader';

function App() {
  React.useEffect(()=>{
    WebFont.load({
      google: {
        families:["Roboto","Droid Sans","Chilanka"]
      }
    })
  },[]);

  return (
    <Router>
      
      <Header />

     <Routes>
   
      <Route path="/" element={<Home />}/>
     
    
    
      <Route  path="/product/:id" element={<ProductDetails/>}/>
      </Routes>

      {/* <Home/> */}
  {/* <ProductDetails/> */}

      <Footer />
    
   </Router>
  );
}

export default App;
