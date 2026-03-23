import { useState, useEffect } from 'react'


export default function PoductPage(){
    
    const [product, setProduct] = useState([])
    
    function fetchProducts(url){
        fetch(url)
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            
        })
    }


    
    return(
        <header>prodotto</header>
    
    
    
    )


}