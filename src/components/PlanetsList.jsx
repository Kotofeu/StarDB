import React from 'react'
import Error from './Error';
import PlanetsItem from './PlanetsItem';
export default function PlanetsList({ planets }) {
  if (!planets.length) {
    return (
      <Error message={'No planets found'}></Error>
    )
  }
  return (
    <div className='planets__grid'>
      {planets.map(planet =>
        <PlanetsItem key={planet.name} props={planet}></PlanetsItem>
      )}
    </div>
  );
}
