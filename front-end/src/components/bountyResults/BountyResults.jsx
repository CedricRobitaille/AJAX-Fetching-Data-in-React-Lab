import "./BountyResults.css"

import Target from "../target/Target";
import Bounty from "../bounty/Bounty";
import Description from "../description/Description";

const BountyResults = ({ currentBounty }) => {

  return (
    <section className="bounty-results">
      <Target currentBounty={currentBounty}/>
      <Bounty />
      <Description />
    </section>
  )
}

export default BountyResults;