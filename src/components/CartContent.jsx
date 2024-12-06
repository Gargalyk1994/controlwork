import ProductsToCart from "./ProductsToCart";

function CartContent() {
    return ( 
        <section className="cart">
            <div className="container">
                <div className="cart__wrapper">
                    <div className="cart__left-block">
                        <div className="cart__left-block_wrap-cards">
                            <ProductsToCart />
                        </div>
                        <div className="card__btns">
                            <button className="card__btn">Clear shopping cart</button>
                            <button className="card__btn">Continue shopping</button>
                        </div>
                    </div>
                    <div className="cart__right-block">
                        <form action="#" className="shipping">
                            <h4 className="shipping__title">Shipping adress</h4>
                            <input type="text" className="shipping__adress" placeholder="City"/>
                            <input type="text" className="shipping__adress" placeholder="State"/>
                            <input type="text" className="shipping__adress" placeholder="Postcode/Zip"/>
                            <button className="shipping__button">Get a quote</button>
                        </form>
                        <form action="#" className="confirm-price">
                            <div className="confirm-price__total">
                                <p className="confirm-price__sub">Sub total</p>
                                <p className="confirm-price__sub-price">900</p>
                            </div>
                            <div className="confirm-price__total">
                                <h5 className="confirm-price__grand">Grand total</h5>
                                <h5 className="confirm-price__grand-price">900</h5>
                            </div>
                            <button className="confirm-price__button">Proceed to checkout</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default CartContent;