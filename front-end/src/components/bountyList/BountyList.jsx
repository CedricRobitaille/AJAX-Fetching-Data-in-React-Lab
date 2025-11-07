import "./BountyList.css"
import CardHeader from "../cardHeader/CardHeader";
import FilterList from "../filterList/FilterList";

const BountyList = (props) => {

  return (
    <main>
      <CardHeader content="Bounties" />
      <FilterList />
    </main>
  )
}

export default BountyList;