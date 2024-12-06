import  mainImage  from "../assets/images/man_with_jacket.svg";


function MainBlock() {
    return ( 
        <>
            <div className="main-block__image-box">
                <img src={mainImage} alt="Man with jacket" className="main-block__image"/>
            </div>
            <div className="main-block__right-block">
                <h1 className="main-block__title-h1">The brand
                    <span className="main-block__title-other1">of luxerious</span>
                    <span className="main-block__title-other2"> fashion</span>
                </h1>
            </div>
        </>
    );
}

export default MainBlock;