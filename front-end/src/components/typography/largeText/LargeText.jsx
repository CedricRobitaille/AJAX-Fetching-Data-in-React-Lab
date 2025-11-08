import "./LargeText.css"

/**
 * H3 label for content blocks
 * @param {text} name 
 */
const LargeText = ({ name }) => {
  return (
    <h3 className="large-text">{name}</h3>
  )
}

export default LargeText;
