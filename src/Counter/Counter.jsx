import React, { useReducer, useState } from 'react'

const Counter = () => {

    // const [count, setCount] = useState(0);
    
    const inisalState = 0;

    const reducer = (state, action) => {
        console.log(action)

        if(action.type === 'INCREMENT'){
            return state+ action.payload.count;
        }else if (action.type === 'DECREMENT'){
            return state - action.payload.count;
        }
    }

    const [state, dispatch] = useReducer(reducer, inisalState)



  return (
    <div className='flex justify-center align-middle'>
        
        <div className='border border-black flex mt-44 p-12'>
            <button onClick={() => dispatch({type: 'DECREMENT', payload: {count: 5}})}  className='bg-purple-600 text-white mr-4 px-4 py-2'>Decrement</button>
            <h1 className='text-2xl font-bold'>{state}</h1>
            <button onClick={() => dispatch({type: 'INCREMENT', payload: {count: 5}})}  className='bg-purple-600 text-white ml-4 px-4 py-2'> Increment</button>
        </div>
    </div>
  )
}

export default Counter