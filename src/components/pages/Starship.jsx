import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Servive from '../../API/Service'
import Loader from '../UI/Loader/Loader'
import Image from '../UI/Image/Image'
import Title from '../UI/Title/Title'
export default function Starship() {
  const params = useParams();
  const [starship, setStarship] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [created, setCreated] = useState('');
  useEffect(() => {
    fetchStarship()
  }, [])
  async function fetchStarship() {
    try {
      setIsLoading(true)
      const response = await Servive.getByIdStarships(params.id);
      setStarship(response.data)
      setCreated(response.data.created.split('T')[0])

    } catch (e) { } finally {
      setIsLoading(false)
    }
  }
  return (
    <section className='starship'>
      <div className='container'>
        {isLoading
          ? <Loader></Loader>
          : <div className='starship__inner'>
            <Title children={starship.name}></Title>
            <div className='starship__info'>
              <div className='starship__img-box'>
                <Image src={`https://starwars-visualguide.com/assets/img/starships/${params.id}.jpg`}></Image>
              </div>
              <ul className='starship__content'>
                <li className='starship__property'>
                  <p className='starship__name'>Model:</p>
                  <p className='starship__value'>{starship.model}</p>
                </li>
                <li className='starship__property'>
                  <p className='starship__name'>Name:</p>
                  <p className='starship__value'>{starship.name}</p>
                </li>
                <li className='starship__property'>
                  <p className='starship__name'>Length:</p>
                  <p className='starship__value'>{starship.length}</p>
                </li>
                <li className='starship__property'>
                  <p className='starship__name'>Cost:</p>
                  <p className='starship__value'>{`$${starship.cost_in_credits}`}</p>
                </li>
                <li className='starship__property'>
                  <p className='starship__name'>Created:</p>
                  <p className='starship__value'>{created}</p>
                </li>
              </ul>
            </div>
            <div className='starship__text'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor.
              Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim
            </div>
          </div>
        }
      </div>
    </section>
  )
}
