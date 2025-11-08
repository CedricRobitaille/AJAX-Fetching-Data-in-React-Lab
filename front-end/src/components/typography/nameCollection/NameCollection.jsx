import "./NameCollection.css"

import Label from "../label/Label";
import LargeText from "../largeText/LargeText";

/**
 * H5 label for content blocks
 * @param {text} title
 * @param {text} name
 */
const NameCollection = ({ title, name }) => {
  return (
    <div className="name-collection">
      <Label title={title} />
      <LargeText name={name} />
    </div>
  )
}

export default NameCollection;
