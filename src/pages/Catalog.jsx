import "../styles/catalog.css";
import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Future from "../components/Future";
import Subscribe from "../components/Subscribe";
import ProductsList from "../components/ProductsList";
import Product from "../components/Product";
import FilterCategories from "../components/FilterCategories";
import FilterBySort from "../components/FilterBySort";
import { useDispatch, useSelector } from "react-redux";
import { setFilterByTrend } from "../slices/FilterSlice";

function Catalog() {
    const [data, setData] = useState([]);
    const filterTrend = useSelector((state) => state.filter.arrSortByTrend);
    const [newLength, setNewLength] = useState(data.length);
    const [quantityOfProducts, setQuantityOfProducts] = useState(1);
    const [trend, setTrend] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();
    
    
    // function setFilterTrend(trend) {
    //     dispatch(setFilterByTrend(trend))
    // }

    useEffect(() => {
        fetch(`https://67458ccc512ddbd807f8859d.mockapi.io/products?trend=${trend}&size=${size}`)
            .then((res) => {
                return res.json();
            })
            .then((array) => {
                setData(array);
            });
    }, [trend, size]);

    console.log(data);
    // function filterByTrend() {
    //     dispatch(setFilterByTrend())
    // }


    
    return ( 
        <>
            <Header />
            <section className="filter">
                <div className="container">
                    <div className="filter__wrap">
                        <FilterCategories />
                        <FilterBySort onClickTrend={(trend) => setTrend(trend)} onClickSize={(size) => setSize(size)}/>
                    </div>
                </div>
            </section>
            <section className="products">
                <div className="container">
                    <div className="products__cards products__cards_for-product">
                    {data.map((item, index) => (
                        <Product i={index} item={item}/>
                    ))}
                    </div>
                </div>
            </section>
            <Future />
            <Subscribe />
            <Footer />
        </>
    );
}

export default Catalog;