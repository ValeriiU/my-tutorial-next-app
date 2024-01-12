'use client'
import React from 'react';
import dataJson from '../../lib/dataJson'
import { useRouter } from 'next/router';

export default  function  ProductScreen(){
    const query = useRouter();
    const  id  =  query
       if (!id) {
        return ( `Product not ID` )
    }
    const product = dataJson.products.find(item => item.id === id);
    // console.log(product.id)

    return (
     <div>
        <h1>{product.id} </h1>
     </div>

    )
}