import React from "react";
import { Cake } from "./cakeUnit"


const img = {
    chocolate: "img/chocolate.jpg",
  }

const CakeContainer = () => {

    return (
        <div className="container">
            <Cake
                img={img.chocolate}
                name="Torta al Cioccolato"
                description="La nostra ricca e decadente torta al cioccolato è fatta con il miglior cacao e ricoperta da una vellutata ganache al cioccolato."/>
            <Cake
                img={img.chocolate}
                name="Chocolate Cake"
                description="Our rich and decadent chocolate cake is made with the finest cocoa and topped with a silky smooth chocolate ganache."/>
            <Cake
                img={img.chocolate}
                name="Chocolate Cake"
                description="Our rich and decadent chocolate cake is made with the finest cocoa and topped with a silky smooth chocolate ganache."/>
            <Cake
                img={img.chocolate}
                name="Chocolate Cake"
                description="Our rich and decadent chocolate cake is made with the finest cocoa and topped with a silky smooth chocolate ganache."/>
            <Cake
                img={img.chocolate}
                name="Chocolate Cake"
                description="Our rich and decadent chocolate cake is made with the finest cocoa and topped with a silky smooth chocolate ganache."/>
            <Cake
                img={img.chocolate}
                name="Chocolate Cake"
                description="Our rich and decadent chocolate cake is made with the finest cocoa and topped with a silky smooth chocolate ganache."/>
         </div>
    )
}

export default CakeContainer;