import React from "react"
import "../styles/footer.css";
import { FooterUnit } from "./footerUnit";

export function Footer () {
  return (
   <footer>
     <div className="footer-cake">
        <div className="footer-description">
          <h1> Ordina oggi la tua deliziosa torta </h1>
          <h3> Che tu stia celebrando un'occasione speciale o semplicemente desideri viziarti, le nostre torte sapranno sicuramente deliziarti. Effettua il tuo ordine oggi e lasciaci creare un capolavoro solo per te. </h3>
        </div>
        <div className="order">
          <div className="btn"> Ordina Ora </div>
        </div>
     </div>
     <FooterUnit/>
   </footer>
  )
}