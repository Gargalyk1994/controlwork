import avatarSubscribe from "../assets/images/subscribe-avatar.svg"

function Subscribe() {
    return ( 
        <section className="subscribe-info">
            <div className="subscribe-info__bgc">
                <div className="container">
                    <div className="subscribe-info__block">
                        <div className="subscribe-info__left-block">
                            <img src={avatarSubscribe} alt="Avatar" className="subscribe-info__avatar"/>
                            <article className="subscribe-info__quote">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“</article>
                        </div>
                        <div className="subscribe-info__right-block">
                            <h3 className="subscribe-info__title">Subscribe</h3>
                            <h4 className="subscribe-info__text">For our newletter and promotion</h4>
                            <form action="#" className="subscribe-info__block-form">
                                <input type="email" className="subscribe-info__input-subscribe text-regular" placeholder="Enter Your Email"/>
                                <button className="subscribe-info__button-subscribe">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Subscribe;