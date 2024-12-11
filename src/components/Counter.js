import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../actions/counterActions'

export const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count)

  return (
    <div>
        <h2>Counter: {count} </h2>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>

    </div>
  )
}
