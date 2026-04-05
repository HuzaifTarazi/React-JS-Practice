import React from 'react'
import PracticeSet1 from './components/PracticeSet1.jsx'
import PracticeSet2 from './components/PracticeSet2.jsx'
import PracticeSet3 from './components/PracticeSet3.jsx'

const App = () => {
  return (
    <div className='bg-gray-950 h-screen text-white p-10'>
      <h1>UseState, UseEffect Hooks</h1>
      <PracticeSet1/>
      <PracticeSet2/>
      <PracticeSet3/>
    </div>
  )
}

export default App