import React from 'react'

const PhaseForm = () => {
    return (
        <div className='w-full h-screen bg-zinc-700 flex items-center justify-center'>
            <div className='w-[40%] h-fit mx-auto py-4 px-20 bg-white text-black rounded-md'>
                <h2 className='text-center font-bold text-2xl mb-5'>Create Phase</h2>
                <form action="http://localhost:5000/phase/create" method='post'>
                    <input type="text" name='phase_name' required autoComplete='off' placeholder='Enter Phase Name' className='w-full bg-zinc-300 mb-3 py-1 px-4'/>
                    <textarea name='description' required autoComplete='off' placeholder='Enter Description' className='w-full bg-zinc-300 mb-3 py-1 px-4'></textarea>
                    <input type="text" name='specific_instructions' required autoComplete='off' placeholder='Enter Specific Instructions' className='w-full bg-zinc-300 mb-3 py-1 px-4'/>
                    <button type="submit" className='py-1 px-6 mt-3 bg-red-600 text-white rounded-md font-semibold'>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default PhaseForm