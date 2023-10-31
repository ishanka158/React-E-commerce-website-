import React from 'react'
import './ProdctDisplay.css' 
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'


function ProductSisplay(props) {
    const {product} = props;
  return (
    <div className='ProductSisplay'>
        <div className="product-display-left">
            <div className="product-display-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />

            </div>
            <div className="productdisplay-img">
                <img className='productdispaly-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="product-display-right">
            <h1>
                {product.name}         
            </h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>

        </div>
    </div>
  )
}

export default ProductSisplay