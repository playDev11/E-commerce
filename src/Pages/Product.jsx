import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopContext } from '../Context/context'

const Product = () => {

  const {product_id } = useParams()
  // console.log(product_id)
const {products} = useContext(shopContext)
const [productData, setProductData] = useState(false)

const fetchProductData = async () =>{
  
}
useEffect
  return (
    <div>
        
    </div>
  )
}

export default Product