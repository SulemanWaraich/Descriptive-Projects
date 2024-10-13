import React from 'react'
import Ambulance from '../../public/Ambulance.png'
import {useNavigate} from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const nav = () => {
    navigate('/searching')
  }
  return (
      <section className='flex justify-around items-center h-[63vh] bg-slate-300'>
        
        <div className='space-y-5 max-w-2xl'>
        <h1 className='text-5xl font-bold'>Get Emergency Care At Your Fingertips</h1>
        <p>Quickly Book An eAmbulance For Immediate Assistance</p>

        <button className='bg-blue-700 text-white px-6 py-4 rounded-lg text-left inline-block' onClick={nav}>Find an eAmbulance</button>
        </div>

        <div className='h-automax-w-xl'>
          <img src={Ambulance} alt="img" className='h-auto w-[28rem]'/>
        </div>
      </section>
  )
}

export default HomePage;