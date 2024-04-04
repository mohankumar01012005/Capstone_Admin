import * as React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import AdminAuth from './Components/AdminAuth'
import Example from './Components/Example'
import ParentContext from './Components/ParentContext';


function App() {
 
  return (
    <ChakraProvider>
    <ParentContext>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AdminAuth/>}></Route>
        <Route path='/example' element={<Example/>}></Route>
      </Routes>
    </BrowserRouter>
    </ParentContext>
      
    </ChakraProvider>
  )
}

export default App