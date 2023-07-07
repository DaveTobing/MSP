import Home from './pages/Home';
import ContactP from './pages/ContactP'
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';


const App = () =>{
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = 'contact' element = {<ContactP/>}/>
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
