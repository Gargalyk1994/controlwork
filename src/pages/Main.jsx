import React from 'react';
import  { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import Home from "./Home";
import Product from "./PageProduct";
import Catalog from "./Catalog";
import Registration from "./Registration";
import Cart from "./Cart";


function Main() {

    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/product" element={<Product />}/>
            <Route path="/catalog" element={<Catalog />}/>
            <Route path="/registration" element={<Registration />}/>
            <Route path="/cart" element={<Cart />}/>
        </Routes>
    );
}

export default Main;