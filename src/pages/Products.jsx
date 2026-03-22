import AppNavbar from "../components/AppNavbar";
import { useState, useEffect, use } from "react";

const apiUrl = 'https://fakestoreapi.com/products'

export default function Products(){
    
    const [products, setProducts] = useState([])
    
    useEffect(()=>{
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {

                console.log(data);
                setProducts(data)

            })
    },[])


    return  (
        <>
            <AppNavbar></AppNavbar>
            <div className="product-page">
                <div className="container">
                    <h1>Products</h1>
                    <div className="row">
                        {products.map(product => (
                            <div key={product.id} className="col-md-6 col-lg-3" >
                                <div className="card mb-4 p-2">
                                    <img src={product.image} className="card-img-top" alt={product.title} style={{ height: '200px', objectFit: 'contain' }} />
                                    <div className="card-body">
                                        <h5 className="card-title text-truncate">{product.title}</h5>
                                        <p className="card-text">${product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )


    
}