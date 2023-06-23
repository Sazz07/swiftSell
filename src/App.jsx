import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes/Routes'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div className=''>
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </div>
  )
}

export default App