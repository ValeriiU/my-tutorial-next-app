'use client'
import * as React from 'react';
import dataJson from '../../lib/dataJson'
import { useRouter } from 'next/navigation';

export default  function  ProductScreen(){
    const { query } = useRouter();
    const { id } =  (query)
       if (!id) {
        return ( `Product not ID` )
    }
    const product = dataJson.products.find(item => item.id === id);

    return (
     <div>
        <h1>{product.title} </h1>
     </div>

    )
}