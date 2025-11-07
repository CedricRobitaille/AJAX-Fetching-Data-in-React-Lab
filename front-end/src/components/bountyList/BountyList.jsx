import "./BountyList.css"
import CardHeader from "../cardHeader/CardHeader";
import FilterList from "../filterList/FilterList";
import BountyCardList from "../bountryCardList/BountryCardList";

const BountyList = ({ criminalList }) => {

  return (
    <main>
      <CardHeader content="Bounties" />
      <FilterList />
      <BountyCardList />
    </main>
  )
}

export default BountyList;