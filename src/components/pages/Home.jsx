import React from 'react'
import Title from '../UI/Title/Title'

export default function Home() {
  return (
    <section className='home'>
      <div className='container'>
        <div className='home__inner'>
          <Title children="Welcome to StarDB" />
          <p className='home__text'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor.
            Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim</p>
        </div>
      </div>
    </section>
  )
}
