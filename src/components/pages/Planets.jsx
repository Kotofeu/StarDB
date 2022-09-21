import React from 'react'
import { useEffect, useState } from 'react'
import Servive from '../../API/Service'
import Title from '../UI/Title/Title'
import PlanetsList from '../PlanetsList'
import Loader from '../UI/Loader/Loader'
export default function Planets() {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPlanet()
  }, [])
  async function fetchPlanet() {
    try {
      setIsLoading(true)
      const response = await Servive.getAllPlanets();
      setPlanets(response.data.results)
    } catch (e) {

    } finally {
      setIsLoading(false)
    }
  }
  return (
    <section className='planets'>
      <div className='container'>
        <div className='planets__inner'>
        <Title children='Planets' />

          {isLoading
            ?<Loader></Loader>
            :<PlanetsList planets={planets}></PlanetsList>
          }

        </div>
      </div>
    </section>)
}
