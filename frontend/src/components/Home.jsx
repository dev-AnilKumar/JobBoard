import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-screen bg-zinc-200  flex items-center justify-center gap-10'>
       <Link to='/jobform'>
        <div className='w-fit px-6 h-10 bg-zinc-500 text-white rounded-md text-xl font-medium grid place-items-center'>Create Job Position</div>
       </Link>
       <Link to='/phaseform'>
        <div className='w-fit h-10 px-6 bg-zinc-500 text-white rounded-md text-xl font-medium grid place-items-center'> Create Phase</div>
       </Link>
    </div>
  )
}

export default Home