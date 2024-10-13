import React from 'react'
import Ambulance from '../../public/Ambulance.png'
import {useNavigate} from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const nav = () => {
    navigate('/searching')
  }
  return (
      <section className='md:flex md:justify-around md:items-center text-center h-[72vh] bg-slate-300'>
        
        <div className='space-y-5 max-w-2xl pt-5'>
        <h1 className='text-5xl font-bold'>Get Emergency Care At Your Fingertips</h1>
        <p>Quickly Book An eAmbulance For Immediate Assistance</p>

        <button className='bg-blue-700 text-white px-6 py-4 rounded-lg text-left inline-block' onClick={nav}>Find an eAmbulance</button>
        </div>

        <div className='h-automax-w-xl flex justify-center mt-5'>
          <img src={Ambulance} alt="img" className='h-auto md:w-[28rem] w-60'/>
        </div>
      </section>
  )
}

export default Home;