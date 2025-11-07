import "./BountryCardList.css"

import BountyCard from "../bountyCard/BountyCard";

const BountyCardList = (props) => {

  const placeholderPeople = [
    {
      id: 1,
      imgUrl: "/images/person1.jpg",
      name: "Marcus Hale",
      crimeCommitted: "petty theft from store"
    },
    {
      id: 2,
      imgUrl: "/images/person2.jpg",
      name: "Aisha Rios",
      crimeCommitted: "vandalism of public property"
    },
    {
      id: 3,
      imgUrl: "/images/person3.jpg",
      name: "Jonas Erick",
      crimeCommitted: "credit card fraud scheme"
    },
    {
      id: 4,
      imgUrl: "/images/person4.jpg",
      name: "Camille Park",
      crimeCommitted: "assault during bar fight"
    },
    {
      id: 5,
      imgUrl: "/images/person5.jpg",
      name: "Noah Bennett",
      crimeCommitted: "driving under influence"
    },
    {
      id: 6,
      imgUrl: "/images/person6.jpg",
      name: "Lina Morales",
      crimeCommitted: "possession of illegal substances"
    },
    {
      id: 7,
      imgUrl: "/images/person7.jpg",
      name: "Ethan Cho",
      crimeCommitted: "cyber intrusion and data theft"
    },
    {
      id: 8,
      imgUrl: "/images/person8.jpg",
      name: "Priya Shah",
      crimeCommitted: "insurance fraud false claim"
    },
    {
      id: 9,
      imgUrl: "/images/person9.jpg",
      name: "Omar Farouk",
      crimeCommitted: "bribery and corruption charges"
    },
    {
      id: 10,
      imgUrl: "/images/person10.jpg",
      name: "Valerie Ng",
      crimeCommitted: "money laundering via shell companies"
    },
    {
      id: 11,
      imgUrl: "/images/person11.jpg",
      name: "Dante Russo",
      crimeCommitted: "illegal wildlife trafficking ring"
    },
    {
      id: 12,
      imgUrl: "/images/person12.jpg",
      name: "Sofia Alvarez",
      crimeCommitted: "arson of vacant building"
    },
    {
      id: 13,
      imgUrl: "/images/person9.jpg",
      name: "Omar Farouk",
      crimeCommitted: "bribery and corruption charges"
    }
  ];

  return (
    <ul className="bounty-card-list">
      {
        placeholderPeople.map((criminal) => (
          <BountyCard img={criminal.imgUrl} name={criminal.name} crime={criminal.crimeCommitted} key={criminal.id} />
        ))
      }
    </ul>
  )
}

export default BountyCardList;