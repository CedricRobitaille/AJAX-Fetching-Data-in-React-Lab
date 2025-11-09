import "./BountryCardList.css"

import { useState } from "react";

import BountyCard from "../bountyCard/BountyCard";

const BountyCardList = ({ criminalList, handleBountySelection, fetchNewData }) => {

  const [pageCount, setPageCount] = useState(1);
  const [loadPause, setLoadPause] = useState(false);

  const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    const nearBottom = scrollTop + clientHeight >= scrollHeight - 250;
    if (nearBottom && !loadPause) {
      setLoadPause(true);
      setPageCount(pageCount+1);
      fetchNewData({ pageCount: pageCount })
      setTimeout(() => {
        setLoadPause(false);
      }, 1000);
    }
  }



  return (
    <ul className="bounty-card-list" onScroll={handleScroll}>
      {
        criminalList.map((criminal, index) => (
          <BountyCard 
            key={index}
            criminal={criminal} 
            img={Array.isArray(criminal.images) && criminal.images[0].thumb} 
            name={criminal.title} 
            crime={Array.isArray(criminal.subjects) && criminal.subjects[0]} 
            handleBountySelection={handleBountySelection} 
          />
        ))
      }
    </ul>
  )
}

export default BountyCardList;