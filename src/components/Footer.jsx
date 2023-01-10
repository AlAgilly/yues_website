import React from 'react'
import {logo} from '../assets'

const Footer = () => {
  return (
    <>
      
      <footer class="text-left bg-black text-gray-600">
  <div class="mx-6 py-10 text-center md:text-left">
    <div class="grid grid-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <div class="">
        <p>
          Here you can use rows and columns to organize your footer content. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className='col-span-2'>
        <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
          Teams
        </h6>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <ul className='grid grid-row'>
                <li>Apex</li>
                <li>Call of Duty</li>
                <li>CS:GO</li>
                <li>Dota 2</li>
                <li>Hearthstone</li>
            </ul>
            <ul className='grid grid-row'>
                <li>League of Legends</li>
                <li>Overwatch</li>
                <li>Rainbow 6 Seige</li>
                <li>Rocket League</li>
                <li>Valorant</li>
            </ul>
        </div>
      </div>
      <div class="">
        <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
          Useful links
        </h6>
        <ul className='grid grid-row'>
                <li>League of Legends</li>
                <li>Overwatch</li>
                <li>Rainbow 6 Seige</li>
                <li>Rocket League</li>
                <li>Valorant</li>
            </ul>
      </div>
      <div className='col-span-2'>
        <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
          Teams
        </h6>
        <div className='grid grid-cols-2'>
            <ul className='grid grid-row'>
                <li>Apex</li>
                <li>Call of Duty</li>
                <li>CS:GO</li>
                <li>Dota 2</li>
                <li>Hearthstone</li>
            </ul>
            <ul className='grid md:grid-row'>
                <li>League of Legends</li>
                <li>Overwatch</li>
                <li>Rainbow 6 Seige</li>
                <li>Rocket League</li>
                <li>Valorant</li>
            </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center p-6 bg-gray-200">
    <span>© 2021 Copyright:</span>
    <a class="text-gray-600 font-semibold" href="https://tailwind-elements.com/">Tailwind Elements</a>
  </div>
</footer>

    </>
  )
}

export default Footer