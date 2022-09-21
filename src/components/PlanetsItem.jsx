import React from 'react'
import Image from './UI/Image/Image';

export default function PlanetsItem({props}) {
  let url = props.url;
  let id = url.split('/')[5];
  return (
      <article className='planets__item'>
          <div className='planets__item-img-box'>
              <Image src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}></Image>
          </div>
          <ul className='planets__content'>
              <li className='planets__property'>
                  <p className='planets__name'>Name:</p>
                  <p className='planets__value'>{props.name}</p>
              </li>
              <li className='planets__property'>
                  <p className='planets__name'>Diameter:</p>
                  <p className='planets__value'>{props.diameter}</p>
              </li>
              <li className='planets__property'>
                  <p className='planets__name'>Population:</p>
                  <p className='planets__value'>{props.population}</p>
              </li>
          </ul>
      </article>)
}
