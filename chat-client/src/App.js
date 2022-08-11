import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import './App.css';
import Login from "./components/Login/Login"
import Chat from './components/Chat/Chat'

import { SocketProvider } from './socketContext'
import { MainProvider } from './mainContext'
import { UsersProvider } from './usersContext'
import { ChakraProvider, Flex } from "@chakra-ui/react"
import DefaultPage from './components/DefaultPage'
function App() {
  return (
    <ChakraProvider>
     <MainProvider>
        <UsersProvider>
          <SocketProvider>
          <Flex className="App" align='center' justifyContent='center'>
              <Router>
                <Routes>
                  <Route exact path='/' element={<Login/>} />
                  <Route exact path='/chat' element={<Chat/>} />
                  {/* <Route path='/chat' component={Chat} /> */}
              
                  {/* <Route component={DefaultPage} /> */}
                  <Route element={<DefaultPage/>} />
                  </Routes>
              </Router>
              </Flex>

          </SocketProvider>
        </UsersProvider>
      </MainProvider>
      </ChakraProvider>
  );
}

export default App;
