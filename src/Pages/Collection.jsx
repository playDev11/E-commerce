import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../Context/context'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../Components/Title'
import ProductItem from '../Components/ProductItem'

const Collection = () => {
  const { products } = useContext(shopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProduct, setFilterProduct] = useState([]) // Full filtered product list
  const [displayProduct, setDisplayProduct] = useState([]) // Displayed product list (limited view)
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relevant')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value))
    } else {
      setCategory((prev) => [...prev, e.target.value])
    }
  }

  const togglesubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value))
    } else {
      setSubCategory((prev) => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice()

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      )
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      )
    }

    setFilterProduct(productsCopy) // Update the full filtered list
    setDisplayProduct(productsCopy) // Initially show the full filtered list
  }

  const sortProduct = () => {
    let fSort = filterProduct.slice()

    switch (sortType) {
      case 'low-high':
        fSort.sort((a, b) => a.price - b.price)
        setDisplayProduct(fSort) // Show the full sorted list
        break
      case 'high-low':
        fSort.sort((a, b) => b.price - a.price)
        setDisplayProduct(fSort) // Show the full sorted list
        break
      case 'newest-arrival':
        setDisplayProduct(fSort.slice(30, 52)) // Limit to first 5 for newest arrival
        break
      default:
        setDisplayProduct(fSort) // Default to showing the full filtered list
        break
    }
  }

  useEffect(() => {
    applyFilter() // Apply the initial filter logic when products load
  }, [products, category, subCategory])

  useEffect(() => {
    sortProduct() // Sort the products based on the sort type
  }, [sortType, filterProduct])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
        </p>
        <img
          className={`h-3 sm:hidden ${showFilter ? ' rotate-90' : ''}`}
          src={assets.dropdown_icon}
          alt=""
        />
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={'Men'}
                onChange={toggleCategory}
                name=""
                id=""
              />
              MEN
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={'Women'}
                onChange={toggleCategory}
                name=""
                id=""
              />
              WOMEN
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={'Kids'}
                onChange={toggleCategory}
                name=""
                id=""
              />
              KIDS
            </p>
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 my-5${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={'Topwear'}
                onChange={togglesubCategory}
                name=""
                id=""
              />{' '}
              TOP
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={'Bottomwear'}
                onChange={togglesubCategory}
                name=""
                id=""
              />{' '}
              TROUSERS
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={'Winterwear'}
                onChange={togglesubCategory}
                name=""
                id=""
              />{' '}
              WINTERWEAR
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTION'} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="newest-arrival">Sort by: Newest arrival</option>
            <option value="low-high">Sort by: price: Low-high</option>
            <option value="high-low">Sort by: price: High-low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {displayProduct.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              price={item.price}
              image={item.image}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection
