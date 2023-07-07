import Home from './pages/Home';
import ContactP from './pages/ContactP'
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";


const App = () =>{
  return (
      <Router>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = 'contact' element = {<ContactP/>}/>
        </Routes>
      </Router>
  )
}

export default App
