import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)



  return (
    <div className='flex justify-center align-middle'>
        
        <div className='border border-black flex mt-44 p-12'>
            <button onClick={() => setCount(prev => prev - 1)} className='bg-purple-600 text-white mr-4 px-4 py-2'>Decrement</button>
            <h1 className='text-2xl font-bold'>{count}</h1>
            <button onClick={() => setCount(prev => prev + 1)} className='bg-purple-600 text-white ml-4 px-4 py-2'> Increment</button>
        </div>
    </div>
  )
}

export default Counter