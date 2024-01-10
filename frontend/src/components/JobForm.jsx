import React, { useEffect, useState } from 'react';
import axios from 'axios'

const JobForm = () => {
  const [phases, setPhases] = useState([]);

  const dupFields = () => {
    const dup_div = document.querySelector(".dup_div");
    const new_data = dup_div.innerHTML;
    dup_div.innerHTML += new_data;
  }

  useEffect(() => {
    const getPhases = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/phase/getAllPhases");
        setPhases(data);
      } catch (error) {
        console.log(error)
      }
    }
    getPhases();
  }, [])

  return (
    <div className='w-full h-screen bg-zinc-700 flex items-center justify-center'>
      <div className='w-[40%] h-fit mx-auto py-4 px-20 bg-white text-black rounded-md'>
        <h2 className='text-center font-bold text-2xl mb-5'>Create Job</h2>
        <form action="http://localhost:5000/job/create" method='post'>
          <input type="text" name='position_name' required autoComplete='off' placeholder='Enter Job Position' className='w-full bg-zinc-300 mb-3 py-1 px-4' />
          <textarea name='description' required autoComplete='off' placeholder='Enter Description' className='w-full bg-zinc-300 mb-3 py-1 px-4'></textarea>
          <input type="text" name='department' required autoComplete='off' placeholder='Enter Department' className='w-full bg-zinc-300 mb-3 py-1 px-4' />
          <textarea name='requirements' required autoComplete='off' placeholder='Enter Requirements' className='w-full bg-zinc-300 mb-3 py-1 px-4'></textarea>
          <div className='flex flex-wrap dup_div'>
            <select name="phase" id="" autoComplete='off' defaultValue="selectphase" className='w-[43%] bg-zinc-300 mb-3 py-1 px-4 font-medium'>
              <option value="selectphase" className='font-medium' disabled>Select Phases</option>
              {phases?.map(function (phase, index) {
                return <option key={index} value={phase._id} className='font-medium'>{phase.phase_name}</option>
              })}
            </select>
            <input type="number" name='seq_num' required autoComplete='off' placeholder='Enter Seq. Num.' className='w-[43%] ml-4 bg-zinc-300 mb-3 py-1 px-4' />
            <div onClick={dupFields} className='ml-4 w-7 h-7 bg-zinc-500 middle add_btn rounded-sm cursor-pointer grid place-items-center'>
              <i className="ri-add-fill text-xl font-bold text-white"></i>
            </div>
          </div>

          <button type="submit" className='py-1 px-6 mt-3 bg-red-600 text-white rounded-md font-semibold'>Submit</button>
        </form>
      </div>

    </div>
  )
}

export default JobForm