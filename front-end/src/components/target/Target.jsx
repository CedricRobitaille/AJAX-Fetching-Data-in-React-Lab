import "./Target.css"

import { useState } from "react";

import CardHeader from "../cardHeader/CardHeader"
import NameCollection from "../typography/nameCollection/NameCollection";

const Target = ({ currentBounty }) => {

  // Parse Name
  const title = currentBounty.title.split(" "); // Split from " " to array
  const [name, setName] = useState({
    first: title[0],
    last: title[title.length - 1]
  })

  const [currentImg, setCurrentImg] = useState(currentBounty.images[0].large);

  let imgPos = 0;

  const handleImgChange = () => {
    if (imgPos === currentBounty.images.length-1) {
      imgPos = 0;
    } else {
      imgPos++;
    }
    setCurrentImg(currentBounty.images[imgPos].large)
  }

  return (
    <article className="card">
      <CardHeader content="Target" />
      <div className="headshot">
        <img src={currentImg} alt="" className="placeholder-img" onClick={handleImgChange} />
      </div>
      <NameCollection title="First Name" name={name.first} />
      <NameCollection title="Last Name" name={name.last} />
    </article>
  )
}

export default Target