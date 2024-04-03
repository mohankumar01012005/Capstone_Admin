import * as React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import example from './Components/example'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import AdminAuth from './Components/AdminAuth'

function App() {
 
  return (
    <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AdminAuth/>}></Route>
        <Route path='/example' element={<example/>}></Route>
        
    
      </Routes>
    </BrowserRouter>
      
    </ChakraProvider>
  )
}

export default App