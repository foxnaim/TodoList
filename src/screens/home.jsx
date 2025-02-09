import React from 'react'
import TaskForm from '../components/TaskForm'

function Home() {
  return (
   <React.Fragment>
    <div className='flex justify-center text-4xl mt-10'>List of deadlines</div>
    <div>
     <div className='w-[500px] h-[100px] mt-[100px]'><TaskForm/></div>
     <div></div>
    </div>
    </React.Fragment>
  )
}

export default Home
