import "./BountryCardList.css"

import BountyCard from "../bountyCard/BountyCard";

const BountyCardList = ({ criminalList, handleBountySelection }) => {

  return (
    <ul className="bounty-card-list">
      {
        criminalList.map((criminal, index) => (
          <BountyCard 
            key={index}
            criminal={criminal} 
            img={criminal.images[0].thumb} 
            name={criminal.title} 
            crime={criminal.subjects[0]} 
            handleBountySelection={handleBountySelection} 
          />
        ))
      }
    </ul>
  )
}

export default BountyCardList;