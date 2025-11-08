import "./HorizontalCollection.css"

import Label from "../label/Label"

/**
 * Horizontal Content Block for Cards
 * @param { String } title
 * @param { String } message
 * @param { Boolean } bold
 */
const HorizontalCollection = ({ title, message, bold }) => {

  return (
    <div className="horizontal-collection">
      <Label title={title} />
      <hr />
      {bold ? <p><strong>{message}</strong></p> : <p>{message}</p>}
    </div>
  )
}

export default HorizontalCollection