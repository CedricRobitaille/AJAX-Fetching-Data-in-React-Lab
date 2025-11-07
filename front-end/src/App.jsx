import { useState, useEffect } from 'react'

import "./App.css"
import * as searchService from "./services/searchService"

import Nav from "./components/nav/Nav.jsx"
import BountyList from './components/bountyList/BountyList.jsx'

const App = () => {

  const [criminalList, setCriminalList] = useState([])

  useEffect(() => {
    const fetchDefaultData = async () => {
      const data = await searchService.get()
      setCriminalList(data)
    };
    fetchDefaultData();

  }, [])

  setTimeout(() => {
    console.log(criminalList)
  }, 2000);
  return (
    <>
      <Nav />
      <section className="primary-content">
        <BountyList criminalList={criminalList} />
      </section>
    </>
  )
}

export default App;