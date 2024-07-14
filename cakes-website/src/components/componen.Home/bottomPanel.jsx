import React from "react"
import "../styles/bottomPanel.css"
import CakeContainer from "./cakeContainer"

const BottomPanel = () => {
  return (
    <div className="bottomPanel">
      <div className="cake-offering">
        <h1> Le nostre deliziose offerte di torte </h1>
        <h3> Dai sapori classici alle creazioni uniche e innovative, la nostra pasticceria ha qualcosa per soddisfare ogni goloso. Esplora la nostra selezione di torte e trova quella perfetta per la tua prossima celebrazione </h3>
      </div>
      <CakeContainer/>
    </div>
  )
}

export default BottomPanel;