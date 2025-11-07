import "./BountyList.css"
import CardHeader from "../cardHeader/CardHeader";
import FilterList from "../filterList/FilterList";
import BountyCardList from "../bountryCardList/BountryCardList";

const BountyList = ({ criminalList, handleBountySelection }) => {

  return (
    <main>
      <CardHeader content="Bounties" />
      <FilterList />
      <BountyCardList criminalList={criminalList} handleBountySelection={handleBountySelection} />
    </main>
  )
}

export default BountyList;