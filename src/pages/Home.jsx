import React from 'react'
import Header from '../components/Header'
import Recipes from '../components/Recipes'

const Home = () => {
  return (
    <main className='w-full flex flex-col'>
      <Header
        title={
          <p>
            Welcome Foodies, 
            <br /> Your All In One Destination For Food Recipes!
          </p>
        }
        type='home'
      />

      <section id="recipes" className='
         text-gray-300 text-md rounded-full focus:ring-1 focus:ring-slate-800 focus:border-slate-800 block
          p-2.5 outline-none px-5 placeholder:text-sm shadow-xl'>
        <Recipes />
      </section>
    </main>
  )
}

export default Home