import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopContext } from '../Context/context'

const Product = () => {

  const {product_id } = useParams()
  // console.log(product_id)
const {products} = useContext(shopContext)
const [productData, setProductData] = useState(false)

const fetchProductData = async () =>{
  const products = ()=>{
    // const response = await fetch(`https://fakestoreapi.com/products/${product_id}`)
  }
}
useEffect(() => {
  fetchProductData();
  },[product_id])

  
  return (
    <div>
        
    </div>
  )
}

export default Product