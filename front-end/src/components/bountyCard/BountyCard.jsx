import "./BountyCard.css"

const BountyCard = ({ img, name, crime, handleBountySelection, criminal }) => {

  return (
    <div className="bounty-card" onClick={() => { handleBountySelection(criminal) }}>
      { img && <img src={img} alt="" className="placeholder-img" />}
      <div className="card-content">
        <h2>{name}</h2>
        <p>{crime}</p>
      </div>
    </div>
  )
}

export default BountyCard;