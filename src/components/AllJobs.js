import React from 'react'
import './alljobs.css'
import { Job } from './Job'

const AllJobs = () => {
  return (
    <div className='alljobs' >
    <h1>
        All Jobs
    </h1>
    <Job/>
    <Job/>
    <Job/>
    <Job/>
        
    </div>
  )
}

export default AllJobs