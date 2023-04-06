import React, { Fragment, useEffect } from 'react'
import './Products.css'
import {useSelector , useDispatch} from 'react-redux'
import {clearErrors , getProduct} from '../../actions/productAction'
import Loader from '../layout/Loader/loader'
import ProductCart from '../Home/ProductCart'
import { useParams } from 'react-router-dom';


const Products = () =>  {

  const dispatch = useDispatch()

  const {products ,loading ,error , productsCount} = useSelector(
    (state) => state.products
  );

  const keyword = useParams()
  console.log(keyword)

  useEffect(() => {
    dispatch(getProduct(keyword))
  },[dispatch , keyword])
  return (
    <Fragment>
      {loading ? <Loader /> :
      <Fragment>
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products && 
            products.map((product) => (
              <ProductCart key={product._id} product={product} />
            ))}
          </div>
      </Fragment>}
    </Fragment>
  )
}

export default Products