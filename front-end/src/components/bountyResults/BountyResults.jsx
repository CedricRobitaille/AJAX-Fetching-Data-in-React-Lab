import "./BountyResults.css"

import Target from "../target/Target";
import Bounty from "../bounty/Bounty";
import Description from "../description/Description";

const BountyResults = (props) => {

  return (
    <section className="bounty-results">
      <Target />
      <Bounty />
      <Description />
    </section>
  )
}

export default BountyResults;