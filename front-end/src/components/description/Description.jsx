import "./Description.css"

import { useState } from "react"

import CardHeader from "../cardHeader/CardHeader"
import HorizontalCollection from "../typography/horizontalCollection/HorizontalCollection"

const Description = ({ currentBounty }) => {

  const [sex, setSex] = useState(currentBounty.sex)
  const [race, setRace] = useState(currentBounty.race)
  const [nationality, setNationality] = useState(currentBounty.nationality)

  const [eyes, setEyes] = useState(currentBounty.eyes)
  const [hair, setHair] = useState(currentBounty.hair)
  const [scarsAndMarks, setScarsAndMarks] = useState(currentBounty["scars-and-marks"])
  const [complexion, setComplexion] = useState(currentBounty.complexion)
  const [build, setBuild] = useState(currentBounty.build)

  const [ageRange, setAgeRange] = useState(currentBounty["age-range"])
  const [ageMax, setAgeMax] = useState(currentBounty["age-max"])
  const [ageMin, setAgeMin] = useState(currentBounty["age-min"])

  const [weight, setWeight] = useState(currentBounty.weight)
  const [weightMax, setWeightMax] = useState(currentBounty["weight-max"])
  const [weightMin, setWeightMin] = useState(currentBounty["weight-min"])

  const [heightMax, setHeightMax] = useState(currentBounty["height-max"])
  const [heightMin, setHeightMin] = useState(currentBounty["height-min"])

  const [aliases, setAliases] = useState(currentBounty.aliases)
  const [location, setLocation] = useState(currentBounty.location)
  const [languages, setLanguages] = useState(currentBounty.languages)
  const [occupation, setOccupation] = useState(currentBounty.occupation)
  const [placeOfBirth, setPlaceOfBirth] = useState(currentBounty["place-of-birth"])


  return (
    <article className="card">
      <CardHeader content="Profile" />
      
      <div className="description-collection">
        {sex && <HorizontalCollection message={sex} title={"sex"} bold={true} />}
        {race && <HorizontalCollection message={race} title={"race"} bold={true} />}
        {nationality && <HorizontalCollection message={nationality} title={"nationality"} bold={true} />}

        {eyes && <HorizontalCollection message={eyes} title={"eyes"} bold={true} />}
        {hair && <HorizontalCollection message={hair} title={"hair"} bold={true} />}
        {scarsAndMarks && <HorizontalCollection message={scarsAndMarks} title={"scars and marks"} bold={true} />}
        {complexion && <HorizontalCollection message={complexion} title={"complexion"} bold={true} />}
        {build && <HorizontalCollection message={build} title={"build"} bold={true} />}

        {ageRange && <HorizontalCollection message={ageRange} title={"age range"} bold={true} />}
        {ageMax && <HorizontalCollection message={ageMax} title={"age max"} bold={true} />}
        {ageMin && <HorizontalCollection message={ageMin} title={"age min"} bold={true} />}

        {weight && <HorizontalCollection message={weight} title={"weight"} bold={true} />}
        {weightMax && <HorizontalCollection message={weightMax} title={"weight max"} bold={true} />}
        {weightMin && <HorizontalCollection message={weightMin} title={"weight min"} bold={true} />}

        {heightMax && <HorizontalCollection message={heightMax} title={"height max"} bold={true} />}
        {heightMin && <HorizontalCollection message={heightMin} title={"height min"} bold={true} />}

        {aliases && <HorizontalCollection message={aliases} title={"aliases"} bold={true} />}
        {location && <HorizontalCollection message={location} title={"location"} bold={true} />}
        {languages && <HorizontalCollection message={languages} title={"languages"} bold={true} />}
        {occupation && <HorizontalCollection message={occupation} title={"occupation"} bold={true} />}
        {placeOfBirth && <HorizontalCollection message={placeOfBirth} title={"placeOfBirth"} bold={true} />}
      </div>
    </article>
  )
}

export default Description