import React from 'react'
import Image from './UI/Image/Image'
import {useNavigate}  from 'react-router-dom'

export default function StarshipsItem({ props }) {
    let url = props.url;
    let id = url.split('/')[5];
    const router = useNavigate()

    return (
        <article className='starships__item' onClick={() => router(`/starships/${id}`)}>
            <div className='starships__item-img-box'>
                <Image src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}></Image>
            </div>
            <ul className='starships__content'>
                <li className='starships__property'>
                    <p className='starships__name'>Cost:</p>
                    <p className='starships__value'>{'$'+`${props.cost_in_credits}`}</p>
                </li>
                <li className='starships__property'>
                    <p className='starships__name'>Name:</p>
                    <p className='starships__value'>{props.name}</p>
                </li>
            </ul>
        </article>)
}
