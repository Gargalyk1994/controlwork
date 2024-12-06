import HamburgerMenu from "./HamburgerMenu";

function Heading() {
    return ( 
        <section className="heading">
            <div className="container">
                <div className="heading__box">
                    <h2 className="heading__title heading__title_for-cart">Shopping cart</h2>
                </div>
                <HamburgerMenu />
            </div>
        </section>
    );
}

export default Heading;