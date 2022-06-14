import React, { Fragment } from 'react';
import {CgMouse} from 'react-icons/cg';
import './Home.css';
import Product from './Product.js';

const product = {
    name: "Blue Tshirt",
    images: [{url:"https://www.chimpwear.com/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/s/u/sup_mens_dark_blue_1_1.jpg"}],
    price:"Rs. 2000",
    _id:"alksdrfhngli",
}

const Home = () => {
  return (
      <Fragment>
          <div className='banner'>
              <p>Welcome to Eve-Mart</p>
              <h1>FIND AWESOME PRODUCTS BELOW</h1>

              <a href='#container'>
                  <button>
                      Scroll <CgMouse />
                  </button>
              </a>
          </div>

          <h2 className='homeHeading'>Featured Products</h2>

          <div className='container' id='container'>
              <Product product={product} />
              <Product product={product} />
              <Product product={product} />
              <Product product={product} />
              <Product product={product} />
              <Product product={product} />
              <Product product={product} />
              <Product product={product} />
          </div>

      </Fragment>
  );
  
};

export default Home;