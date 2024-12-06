import "../styles/registration.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Subscribe from "../components/Subscribe";
import RegistrationContent from "../components/RegistrationContent";

function Registration() {
    return ( 
        <>
            <Header />
            <Heading />
            <RegistrationContent />
            <Subscribe />
            <Footer />
        </>
    );
}

export default Registration;