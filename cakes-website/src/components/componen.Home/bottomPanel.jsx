import React from "react"
import "../styles/bottomPanel.css"
import CakeContainer from "./cakeContainer"

const BottomPanel = () => {
  return (
    <div className="bottomPanel">
      <div className="cake-offering">
        <h1>Our Delectable Cake Offerings</h1>
        <h3>From classic flavors to unique and innovative creations, our bakery has something to satisfy every sweet tooth. Explore our selection of cakes and find the perfect one for your next celebration.</h3>
      </div>
      <CakeContainer/>
    </div>
  )
}

export default BottomPanel;