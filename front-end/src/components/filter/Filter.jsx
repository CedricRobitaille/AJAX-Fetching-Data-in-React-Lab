import "./Filter.css"

const Filter = ({ filter }) => {

  return (
    <li className="filter">
      <button onClick={() => { console.log(`clicked ${filter.action}`) }}>{filter.content}</button>
    </li>
  )
}

export default Filter;