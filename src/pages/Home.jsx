import "../styles/main.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainBlock from "../components/MainBlock";
import Offer from "../components/Offer";
import Future from "../components/Future";
import Subscribe from "../components/Subscribe";
import ProductsList from "../components/ProductsList";


function Home() {
    let quantityOfProducts = 6;

    return ( 
        <>
            <Header />
            <MainBlock />
            <Offer />
            <section className="products">
                <div className="container">
                    <h2 className="products__title">Fetured Items</h2>
                    <p className="products__description">Shop for items based on what we featured in this week</p>
                    <div className="products__cards products__cards_for-product">
                        {/* <ProductsList newLength = {quantityOfProducts}/> */}
                    </div>
                </div>
            </section>
            <Future />
            <Subscribe />
            <Footer />
        </>
    );
}

export default Home;