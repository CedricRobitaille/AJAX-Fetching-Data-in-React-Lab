import "./Bounty.css"

import { useState } from "react"

import CardHeader from "../cardHeader/CardHeader"
import HorizontalCollection from "../typography/horizontalCollection/HorizontalCollection"
import VerticalCollection from "../typography/verticalCollection/VerticalCollection"


const Bounty = ({ currentBounty }) => {

  const [caution, setCaution] = useState(currentBounty.warning_message);
  const [price, setPrice] = useState(currentBounty.reward_text);
  const [details, setReason] = useState(currentBounty.description);



  return (
    <article className="card">
      <CardHeader content="Bounty" />
      <div className="bounty-collection">
        <VerticalCollection message={caution} title="Caution" bold={true} />
        <VerticalCollection message={price} title="Price" />
        <VerticalCollection message={details} title="Details" />
      </div>
    </article>
  )
}

export default Bounty