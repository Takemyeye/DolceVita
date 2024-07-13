import React from "react"
import "../styles/footer.css";
import { FooterUnit } from "./footerUnit";

export function Footer () {
  return (
   <footer>
     <div className="footer-cake">
        <div className="footer-description">
          <h1>Order Your Delicious Cake Today</h1>
          <h3>Whether you're celebrating a special occasion or just looking to treat yourself, our cakes are sure to delight. Place your order today and let us create a masterpiece just for you.</h3>
        </div>
        <div className="order">
          <div className="btn">Order Now</div>
        </div>
     </div>
     <FooterUnit/>
   </footer>
  )
}