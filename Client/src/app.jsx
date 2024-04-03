import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import AdminAuth from './Components/AdminAuth'

function App() {
 
  return (
    <ChakraProvider>
      <AdminAuth/>
    </ChakraProvider>
  )
}

export default App