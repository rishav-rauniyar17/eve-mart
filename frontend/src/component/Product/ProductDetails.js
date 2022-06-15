import React, { Fragment, useEffect  } from "react";

import  Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import {getProductDetails} from "../../actions/productAction";
// import { useParams } from "react-router-dom";


const ProductDetails = ({match}) => {
  // const  params = useParams();
    const dispatch = useDispatch();

    const { product, loading, error } = useSelector(
        (state) => state.productDetails
      );

   useEffect(()=>{
   dispatch(getProductDetails(match.params.id))
   },[dispatch,match.params.id]);

    return (
    <Fragment>
        <div className="ProductDetails">
            <div>
                <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
                </Carousel>
            </div>
        </div>
    </Fragment>
    );
};

// import React from "react";
//  const ProductDetails=()=>{
//     return <div> fsavvscvi</div>
//  }

export default ProductDetails;