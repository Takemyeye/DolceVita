import { AboutUnit } from "./aboutUnit"

export function FooterUnit () {

    return (
        <div className="footer-container"> 
            <AboutUnit
                text="Torte"
                link="/catalog "
                component1="Torte classiche"
                component2="Torte speciali"
            />
        </div>
    )
}