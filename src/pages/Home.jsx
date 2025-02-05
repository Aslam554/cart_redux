import React, { useEffect, useState } from 'react';
import { add } from '../Redux/Cartslice';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES, fetchproducts } from '../Redux/ProductSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../component/Navbar'; // Import Navbar
import './Home.css';  

const Home = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        dispatch(fetchproducts());
    }, [dispatch]);

    const handleAdd = (product) => {
        dispatch(add(product));
        toast.success(`${product.title} added to cart!`);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (status === STATUSES.Loading) {
        return <h2 style={{ fontWeight: 'bolder' }}>Loading...</h2>;
    }

    return (
        <div>
            <ToastContainer />
            <Navbar onSearch={handleSearch} /> {/* Pass handleSearch to Navbar */}
            <div className="productsWrapper">
                {filteredProducts.map((product) => (
                    <div className="card" key={product.id}>
                        <img src={product.image} alt="img" />
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <button className="btn" onClick={() => handleAdd(product)}>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
