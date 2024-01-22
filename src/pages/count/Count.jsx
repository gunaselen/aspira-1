import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../rexdux/actions/productionActions'


export function Counter() {
//   const count = useSelector()
  const dispatch = useDispatch()

  return (
    <div>
      <div >
        <button
         
          aria-label="Increment value"
          onClick={() => dispatch(increment({value:1}))}
        >
          +
        </button>
        {/* <span >{count}</span> */}
        <button
         
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      {/* omit additional rendering output here */}
    </div>
  )
}