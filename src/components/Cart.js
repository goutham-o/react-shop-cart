import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const [cost, setPrice] = useState(0);
  const { cartList } = useSelector((state) => state.lists);

  console.log(cartList);
  useEffect(() => {
    if (cartList.length > 0) {
      let result = 0;
      result = cartList.reduce((acc, curr) => {
        return acc + curr.price;
      }, 0);
      setPrice(result);
    }
  }, [cartList]);
  return (
    <div className='d-flex justify-content-center bd-highlight mt-3'>
      <div className='card' style={{ width: '60%' }}>
        <div className='card-header d-flex justify-content-between'>
          <div>Cart Items: {cartList.length}</div>
          <div>Price: {cost}</div>
        </div>
        {cartList.map((cart, index) => (
          <div className='card-body d-flex justify-content-between' key={index}>
            <div>
              <img src={cart.img} alt='' />
            </div>
            <div>{cart.title}</div>
            <div>{cart.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
