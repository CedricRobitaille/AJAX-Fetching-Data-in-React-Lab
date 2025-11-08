import "./VerticalCollection.css"

import Label from "../label/Label"

/**
 * Vertical Content Block for Cards
 * @param { String } title
 * @param { String } message
 * @param { Boolean } bold
 */
const VerticalCollection = ({ title, message, bold }) => {

  return (
    <div className="vertical-collection">
      <Label title={title} />
      {bold ? <p><strong>{message}</strong></p> : <p>{message}</p>}
    </div>
  )
}

export default VerticalCollection