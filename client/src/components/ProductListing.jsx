import React from 'react'
import image from './img-placeholder.png';
import FlowStart from './FlowStart';


function ProductListing() {

    function startFlow(e) {
        e.preventDefault();
        console.log('asd')
    }

    return (
        <div>
            <img src={image} className='image' />
            <h1>Product</h1>
            <p>product description describing the product and it's features in an accurate and timly manner</p>
            <p>$24.99</p>
            <button onClick={startFlow}>Customize your product</button>
        </div>
    )
};

export default ProductListing

//figure out how to render flow onclick