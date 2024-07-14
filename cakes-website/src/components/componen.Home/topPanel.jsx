import React from "react"
import { Link } from "react-router-dom"

export function TopPanel () {
  return (
    <div className="topPanel">
      <div className="main-img"></div>
      <div className="description-container">
        <h1>Concediti la dolcezza dei nostri deliziosi dolci</h1>
        <h3>Benvenuti a Delicious Cakes, dove realizziamo le torte più gustose e visivamente sorprendenti per tutte le vostre occasioni speciali. Il nostro team di abili fornai e decoratori utilizza solo gli ingredienti migliori per creare prelibatezze che vi lasceranno con la voglia di averne ancora.</h3>
        <Link to="#">  
          <div className="btn"> Ordina ora </div>
        </Link>
      </div>
    </div>
  )
}