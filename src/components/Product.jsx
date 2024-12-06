import iconCart from "../assets/images/products-cart.svg";

function Product({i, item}) {
    return ( 
        <div key={item.id} className="products__card">
            <div className={`products__image-box products__image-box-background${i + 1}`}>
                <div className="products__dark-background">
                    <button className="products__button-add-to-cart">
                        <img src={iconCart} alt="Cart" className="products__icon-cart"/>
                        <span className="products__text-add-cart">Add to cart</span>
                    </button>
                </div>
            </div>
            <div className="products__text">
                <h3 className="products__card-title">{item.title}</h3>
                <p className="products__card-description">{item.description}</p>
                <p className="products__card-price">{item.price}</p>
            </div>
        </div> 
    );
}

export default Product;