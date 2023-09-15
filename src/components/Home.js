import React from 'react';
import img1 from "../images/img1.png";
import img2 from "../images/img3.png";
import img3 from "../images/img2.png";
import img4 from "../images/img4.png";

function Home(){
    return (
        <div className="main-container">
        <div className="container">
        <div className="card card1">
            <div className="content contentLeft">
                <p>Black Mamba</p>
            </div>
            <img src={img1} className="imgLeft" alt="Kobe Bryant"/>
            <div className="name"><h1>Kobe Bryant</h1></div>
        </div>

        <div className="card card2 cardRight">
            <div className="name"><h1>Michael Jordan</h1></div>
            <img src={img2} className="imgRight" alt="Michael Jordan"/>
            <div className="content contentRight">
                <p>Air Jordan</p>
            </div>
        </div>

        <div className="card card3">
            <div className="content contentLeft">
                <p>King James</p>
            </div>
            <img src={img3} className="imgLeft" alt="Lebron James"/>
            <div className="name"><h1>Lebron James</h1></div>
        </div>

        <div className="card card4 cardRight">
            <div className="name"><h1>Russell Westbrook</h1></div>
            <img src={img4} className="imgRight" alt="Russell Westbrook"/>
            <div className="content contentRight">
                <p>Beastbrook</p>
            </div>
        </div>
    </div>
    </div>

    )
}

export default Home;