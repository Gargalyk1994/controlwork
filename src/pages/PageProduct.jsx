import "../styles/product.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Slider from "../components/Slider";
import DescriptionProduct from "../components/DescriptionProduct";
import Subscribe from "../components/Subscribe";
import ProductsList from "../components/ProductsList";


function Product() {
    let quantityOfProducts = 3;
    return ( 
        <>
            <Header />
            <Heading />
            <Slider />
            <DescriptionProduct />
            <section className="products">
                <div className="container">
                    <div className="products__cards products__cards_for-product">
                        {/* <ProductsList newLength = {quantityOfProducts}/> */}
                    </div>
                </div>
            </section>
            <Subscribe />
            <Footer />
        </>
    );
}

export default Product;