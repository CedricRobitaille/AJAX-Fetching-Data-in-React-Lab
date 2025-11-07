import "./BountryCardList.css"

import BountyCard from "../bountyCard/BountyCard";

const BountyCardList = ({ criminalList }) => {

  return (
    <ul className="bounty-card-list">
      {
        criminalList.map((criminal, index) => (
          <BountyCard key={index} img={criminal.images[0].thumb} name={criminal.title} crime={criminal.subjects[0]} />
        ))
      }
    </ul>
  )
}

export default BountyCardList;