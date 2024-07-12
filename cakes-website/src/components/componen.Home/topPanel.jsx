import React from "react"
import { Link } from "react-router-dom"

const img = {
  dolceVita: 'img/...'
}

export function TopPanel () {
  return (
    <div className="topPanel">
      <div className="main-img">
        <img src={img.dolceVita} alt="иди нахуй" />
      </div>
      <div className="description-container">
        <h1>Indulge in the Sweetness of Our Delicious Cakes</h1>
        <h3>Welcome to Delicious Cakes, where we craft the most mouthwatering and visually stunning cakes for all your special occasions. Our team of skilled bakers and decorators use only the finest ingredients to create delectable treats that will leave you craving more.</h3>
        <div className="btn"> Start Now </div>
      </div>
    </div>
  )
}