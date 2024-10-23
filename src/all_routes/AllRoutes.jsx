import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import NotFound from '../pages/NotFound'
import Leads from '../pages/Leads'

const AllRoutes = () => {
  return (
    <Routes>
       <Route path='/dashboard' element={<Dashboard/>} />
       <Route path='/' element={<Dashboard/>} />
       <Route path='/leads' element={<Leads/>} />
       <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default AllRoutes