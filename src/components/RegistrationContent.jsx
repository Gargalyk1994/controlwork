function RegistrationContent() {
    return ( 
        <section className="registration">
            <div className="container">
                <div className="registration__box">
                    <form action="#" className="registration__block-forms">
                        <div className="block-forms__form-person">
                            <legend className="form-person__title">Your name</legend>
                            <input type="text" className="form-person__name" placeholder="First Name" required/>
                            <input type="text" className="form-person__name" placeholder="Last Name" required/>
                        </div>
                        <div className="block-forms__form-gender">
                            <input id="male" type="radio" className="form-gender__male" name="choice-gender"/>
                            <label for="male" className="form-gender__male-label">Male</label>
                            <input id="female" type="radio" className="form-gender__male" name="choice-gender"/>
                            <label for="female" className="form-gender__male-label">Female</label>
                        </div>
                        <div className="block-forms__form-registration">
                            <legend className="form-registration__title">Login details</legend>
                            <input type="email" className="form-registration__email" placeholder="Email" required/>
                            <input type="password" className="form-registration__password" placeholder="Password" required/>
                            <p className="form-registration__help">Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters</p>
                        </div>
                        <button className="block-forms__btn-join">
                            <h3 className="block-forms__btn-title">Join now</h3>
                            <svg width="17.000977" height="9.918610" viewBox="0 0 17.001 9.91861" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <path id="Vector" d="M11.54 0.2C11.6 0.14 11.68 0.08 11.77 0.05C11.85 0.01 11.94 0 12.04 0C12.13 0 12.22 0.01 12.31 0.05C12.39 0.08 12.47 0.14 12.54 0.2L16.79 4.45C16.85 4.52 16.91 4.6 16.94 4.68C16.98 4.77 17 4.86 17 4.95C17 5.05 16.98 5.14 16.94 5.23C16.91 5.31 16.85 5.39 16.79 5.46L12.54 9.71C12.41 9.84 12.22 9.91 12.04 9.91C11.85 9.91 11.67 9.84 11.54 9.71C11.4 9.57 11.33 9.39 11.33 9.2C11.33 9.02 11.4 8.84 11.54 8.7L15.28 4.95L11.54 1.21C11.47 1.14 11.42 1.06 11.38 0.98C11.35 0.89 11.33 0.8 11.33 0.7C11.33 0.61 11.35 0.52 11.38 0.43C11.42 0.35 11.47 0.27 11.54 0.2Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd"/>
                                <path id="Vector" d="M0 4.95C0 4.77 0.07 4.59 0.2 4.45C0.34 4.32 0.52 4.25 0.7 4.25L15.58 4.25C15.77 4.25 15.95 4.32 16.08 4.45C16.21 4.59 16.29 4.77 16.29 4.95C16.29 5.14 16.21 5.32 16.08 5.46C15.95 5.59 15.77 5.66 15.58 5.66L0.7 5.66C0.52 5.66 0.34 5.59 0.2 5.46C0.07 5.32 0 5.14 0 4.95Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd"/>
                            </svg>
                        </button>
                    </form>
                    <div className="registration__block-loyality">
                        <h2 className="block-loyality__title">Loyality has its perks</h2>
                        <p className="block-loyality__text">Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:</p>
                        <ul className="block-loyality__privileges">
                            <li className="block-loyality__privilege">15% off welcome offer</li>
                            <li className="block-loyality__privilege">Free shipping, returns and exchanges on all orders</li>
                            <li className="block-loyality__privilege">$10 off a purchase on your birthday</li>
                            <li className="block-loyality__privilege">Early access to products</li>
                            <li className="block-loyality__privilege">Exclusive offers & rewards</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RegistrationContent;