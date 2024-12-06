import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from 'react';
import iconCart from "../assets/images/products-cart.svg";
import { setFilterByTrend } from "../slices/FilterSlice";


function ProductsList() {
    const [data, setData] = useState([]);
    const filterTrend = useSelector((state) => state.filter.arrSortByTrend);
    const [newLength, setNewLength] = useState(data.length);
    const [quantityOfProducts, setQuantityOfProducts] = useState(1);
    const dispatch = useDispatch();
    
    function setFilterTrend(params) {
        dispatch(setFilterByTrend())
    }

    useEffect(() => {
        fetch("https://67458ccc512ddbd807f8859d.mockapi.io/products?trend="+ filterTrend)
            .then((res) => {
                return res.json();
            })
            .then((array) => {
                setData(array);
            });
    }, [filterTrend]);

    console.log(data);
    // products.length = newLength;h

    // function changeQuantity() {
    //     dispatch(changeQuantity(quantityOfProducts));
    // }
    // const filterBySize = () => {
    //     for (let i = 0; i < newLength; i++) {
            
    //     }
    // }
    return (
        <>
            {data.map((product, index) => (
            <div key={product.id} className="products__card">
                <div className={`products__image-box products__image-box-background${index + 1}`}>
                    <div className="products__dark-background">
                        <button className="products__button-add-to-cart">
                            <img src={iconCart} alt="Cart" className="products__icon-cart"/>
                            <span className="products__text-add-cart">Add to cart</span>
                        </button>
                    </div>
                </div>
                <div className="products__text">
                    <h3 className="products__card-title">{product.title}</h3>
                    <p className="products__card-description">{product.description}</p>
                    <p className="products__card-price">{product.price}</p>
                </div>
            </div>
            ))}
        </>
    );
};

export default ProductsList;