import "./BountyList.css"
import CardHeader from "../cardHeader/CardHeader";
import FilterList from "../filterList/FilterList";
import BountyCardList from "../bountryCardList/BountryCardList";

const BountyList = ({ criminalList, handleBountySelection, fetchNewData }) => {

  return (
    <main onScroll={() => {handleScroll(event)}}>
      <CardHeader content="Bounties" />
      <FilterList />
      <BountyCardList criminalList={criminalList} handleBountySelection={handleBountySelection} fetchNewData={fetchNewData} />
    </main>
  )
}

export default BountyList;