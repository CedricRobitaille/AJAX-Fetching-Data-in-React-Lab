import "./FilterList.css"
import Filter from "../filter/Filter";

const FilterList = () => {

  const filters = [
    { content: "Location", action: "location" },
    { content: "Murder", action: "murder" },
  ]

  return (
    <ul className="filter-list">
      {
        filters.map((filter, index) => (
          <Filter key={index} filter={filter} />
        ))
      }
    </ul>
  )
}

export default FilterList;