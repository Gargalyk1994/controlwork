import "../styles/cart.css";
import Header from "../components/Header";
import Heading from "../components/Heading";
import CartContent from "../components/CartContent";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

function Cart() {
    return ( 
        <>
            <Header />
            <Heading />
            <CartContent />
            <Subscribe />
            <Footer />
        </>
    );
}

export default Cart;