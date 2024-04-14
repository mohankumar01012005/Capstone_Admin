import * as React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import AdminAuth from './Components/AdminAuth'
import Example from './Components/example'
import ParentContext from './Components/ParentContext';
import AdminBoard from './Components/AdminBoard'
import Coach_Applications from './Components/Coach_Applications'
import Verified_Coaches from './Components/Verified_Coaches'
import Verified_Students from './Components/Verified_Students'
import CoachData from './Components/CoachData'


function App() {
 
  return (
    <ChakraProvider>
    <ParentContext>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AdminAuth/>}></Route>
        <Route path='/example' element={<Example/>}></Route>
        <Route path='/AdminBoard' element={<AdminBoard/>}></Route>
        <Route path='AdminBoard/coachApplication' element={<Coach_Applications/>}></Route>
        <Route path='AdminBoard/verifiedCoach' element={<Verified_Coaches/>}></Route>
        <Route path='AdminBoard/verifiedStudents' element={<Verified_Students/>}></Route>
        <Route path='CoachData' element={<CoachData/>}></Route>
      </Routes>
    </BrowserRouter>
    </ParentContext>
    {/* // <AdminBoard></AdminBoard> */}
      
    </ChakraProvider>
  

  
  )
}

export default App