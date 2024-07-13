export function Cake ({ img, description, name}) {
    return (
        <div className="cake-container">
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h6>{description}</h6>
        </div>
    )
}