import React from "react";
import "./Card.css"
import { Image } from "react-bootstrap"
import styles from "./AltCard.module.css"


  // src={`https://chapterslogo.s3.us-east-2.amazonaws.com/PPIA.png`}
function TestCard() {
    return (
        <div class="container">
            <div class="card">
                <div class="imgBx">
                    <img src="https://assets.codepen.io/4164355/shoes.png"/>
                    </div>
                    <div class="contentBx">
                    <h2>Nike Shoes</h2>
                    <div class="size">
                        <h3>Size :</h3>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                    </div>
                    <div class="color">
                        <h3>Color :</h3>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <a href="#">Buy Now</a>
                </div>
            </div>
        </div>
    );
}

export default TestCard;