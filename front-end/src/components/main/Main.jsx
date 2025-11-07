import "./Main.css"

import BountyList from '../bountyList/BountyList.jsx'

const Main = ({ criminalList }) => {

  return (
    <section className="primary-content">
      <BountyList criminalList={criminalList} />
    </section>
  )
}

export default Main;