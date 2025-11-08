import "./Label.css"

/**
 * H5 label for content blocks
 * @param {text} title 
 */
const Label = ({ title }) => {
  return (
    <h5 className="content-label">{title}</h5>
  )
}

export default Label
