import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div>
            <div className="container">
                <h2 className='text-center mt-style text-danger'>Total Products: {products.length}</h2>
                <div className="row">
                    {
                        products.map(product => <Product key={product.id} product={product} setcount={props.setcount}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;