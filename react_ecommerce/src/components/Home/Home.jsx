import React from 'react'
import './Home.styles.scss'

const Home = () => {
  return (
    <section className='container__home'>
     <div className='container__img'>
    <img src='/image1.avif' alt='image'/>
    <img src="/image2.avif" alt="Imagen 2" />
    <img src="/image3.avif" alt="Imagen 3" />
    </div>
    </section>
  )
}

export default Home
