'use client'
import * as React from 'react';
import dataJson from '../../../lib/dataJson'
import { useRouter } from 'next/navigation';

export default function Page() {
  const { query } = useRouter();
  const id = { query }
  if (!id) {
    return (`Product not ID`)
  }
  dataJson.products.find(item => item.id === id);

  return (
    <div>
      <p>product.id</p>
        
     </div>

    )}
