export function Cake ({ img, description, name}) {
    return (
        <div className="cake-container">
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h5>{description}</h5>
        </div>
    )
}