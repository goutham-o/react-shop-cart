import React, { useEffect } from 'react';
import Card from './card';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from '../redux/actions/shopAction';



const Product = () => {
  const dispatch = useDispatch();

  const { productList, cartList } = useSelector((state) => state.lists);
  console.log(cartList);
  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  return (
    <div className='card'>
      <div
        className='card-header'
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div>Shopping Items</div>
        {cartList.length > 0 ? (
          <Link to={'/cart'} className='text-info font-weight-bold'>
            Cart: {cartList.length}
          </Link>
        ) : (
          <div className='text-danger font-weight-bold'>
            Cart: 0
          </div>
        )}
      </div>
      <div
        className='row'
        style={{
          marginTop: 20,
          marginBottom: 20,
          flex: 1,
          justifyContent: 'center',
        }}
      >
        {productList.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Product;
