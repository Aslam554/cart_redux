import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../Redux/Cartslice';

const Cart = () => {
    const dispatch = useDispatch();
    const cartitems = useSelector((state) => state.cart);
    
    const handleRemove = (id) => {
        dispatch(remove({ id }));
    };

    return (
        <div>
            <h3 style={{ fontWeight: 'bolder',marginTop: '60px' }}>Cart Page</h3>
            <div className='cartWrapper'>
                {cartitems.map((item) => (
                    <div className='cartCard' key={item.id}>
                        <img src={item.image} alt="img" />
                        <h5>{item.title}</h5>
                        <h5>{item.price}</h5>
                        <h5>Quantity: {item.quantity}</h5>
                        <button className='btn' onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
