import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/shopAction';
const Card = (props) => {
  const dispatch = useDispatch();

  const addHandleToCart = (cart) => {
    dispatch(addToCart(cart));
  };

  const { title, price, img } = props.item;
  return (
    <div className='col-md-3'>
      <div className='card' style={{ width: '18' }}>
        <img src={img} className='App-logo' alt='logo' />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
        </div>
        <div
          className='card-footer'
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div>Price: {price}</div>
          <div
            className='btn btn-primary'
            onClick={() => addHandleToCart(props.item)}
          >
            Add To Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
