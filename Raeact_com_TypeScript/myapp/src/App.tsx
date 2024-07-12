import React from "react";
import { Layout } from "./components/Layout";
import styled, { withTheme } from "styled-components";
import { 
  ChakraProvider,
   Input,
   Box,
   Center,
   Button, ButtonGroup
} from '@chakra-ui/react'
import { boasVindas } from "./services/boasVindas";
//  import { TelaLogin } from "./components/Login";



function App() {
  return (
  
    <ChakraProvider>
      <Box  minHeight='100vh' backgroundColor="#00CED1" padding='30px'>
      <Layout>
        <Box  marginTop='30px' backgroundColor="white" p='20px' borderRadius='10px'> 
          <center>
            <h2>Tela de login</h2>
          </center>               
          <Input placeholder='Email' marginTop='10px'/>
          <Input placeholder='Password' type="password" marginTop='10px' />  
          <Button onClick={boasVindas}  backgroundColor='#00CED1' marginTop='10px' width='100%'>
            Entrar
          </Button>
        </Box>
      </Layout>
      </Box>
    </ChakraProvider>

   
  )

}

export default App;
