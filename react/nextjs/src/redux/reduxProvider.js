'use client'
import React, { Children } from 'react'
import { Provider } from 'react-redux'
import store from './store'

const ReduxProvider = ({Children}) => {
  return (
    <Provider store={store}>
    {Children}
    </Provider>
  )
}

export default ReduxProvider