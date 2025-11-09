import { useState, useEffect } from 'react'

import "./App.css"
import * as searchService from "./services/searchService"

import Nav from "./components/nav/Nav.jsx"
import Main from './components/main/Main.jsx'

const App = () => {

  const [criminalList, setCriminalList] = useState([])

  useEffect(() => {
    const fetchDefaultData = async () => {
      const data = await searchService.get({})
      setCriminalList(data)
    };
    fetchDefaultData();

  }, []);

  const fetchNewData = async (params) => {
    const data = await searchService.get(params)
    console.log("DataFetched: ", data)
    const newCriminalList = [...criminalList, ...data]
    console.log("NEW CRIMINAL LIST: ", newCriminalList)
    setCriminalList(newCriminalList);
  }

  
  return (
    <>
      <Nav />
      <Main criminalList={criminalList} fetchNewData={fetchNewData} />
    </>
  )
}

export default App;