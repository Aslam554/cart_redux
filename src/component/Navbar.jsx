import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';
import { ShoppingCart } from 'lucide-react';

const Navbar = ({ onSearch }) => {
    const items = useSelector((state) => state.cart);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value);
    };

    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className='navbar' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>Redux Tutorial Shopping Cart</span>
            <div>
                <Link className='navLink' style={{ fontWeight: 'bolder',color: 'white' }} to={"/"}>Home</Link>
                <Link className='navLink' style={{ marginRight: '15px', fontWeight: 'bolder',color:'white'
                     }} to={"/cart"}>Cart</Link>
                <span style={{ fontWeight: 'bolder' }}> <ShoppingCart size={24} /><span className='itms'>{items.length}</span></span>
            </div>
            <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearch}
                className="searchInput"
            />
            <div className="totalPrice" style={{ marginLeft: '1rem', fontWeight: 'bolder' }}>
                Total Price: ₹{totalPrice.toFixed(2)}
            </div>
        </div>
    );
};

export default Navbar;
