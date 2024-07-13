import { AboutUnit } from "./aboutUnit"

export function FooterUnit () {

    return (
        <div className="footer-container"> 
            <AboutUnit
                text="Cakes"
                link="/catalog "
                component1="Classic Cakes"
                component2="Specialty Cakes"
            />
        </div>
    )
}