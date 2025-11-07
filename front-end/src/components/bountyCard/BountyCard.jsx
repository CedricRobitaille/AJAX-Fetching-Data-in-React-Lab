import "./BountyCard.css"

const BountyCard = ({ img, name, crime }) => {

  return (
    <div className="bounty-card" onClick={() => { console.log(`Clicked on ${name}`)}}>
      { img && <img src={img} alt="" className="placeholder-img" />}
      <div className="card-content">
        <h2>{name}</h2>
        <p>{crime}</p>
      </div>
    </div>
  )
}

export default BountyCard;