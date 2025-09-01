import React from 'react'
import Router from './utils/Router'
import Fixed from './components/Fixed'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <Router />
      <Fixed />
    </div>
  )
}

export default App
