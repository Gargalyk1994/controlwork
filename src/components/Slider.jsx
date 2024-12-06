import productImage from "../assets/images/img-for-slider.png";

function Slider() {
    return ( 
        <section className="slider">
            <div className="slider__switch">
                <div className="slider__prev">
                    <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.6998 3.7499L4.9498 11.4999L12.6998 19.2499L11.1498 22.3499L0.299805 11.4999L11.1498 0.649902L12.6998 3.7499Z" fill="black"/>
                    </svg>
                </div>
                <div className="slider__image-box">
                    <img src={productImage} alt="Woman" className="slider__image"/>
                </div>
                <div className="slider__next">
                    <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.299805 19.2499L8.0498 11.4999L0.299805 3.7499L1.8498 0.649902L12.6998 11.4999L1.8498 22.3499L0.299805 19.2499Z" fill="black"/>
                    </svg>
                </div>
            </div>
        </section>
    );
}

export default Slider;