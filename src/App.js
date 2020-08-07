import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Portfolio from "./components/pages/Portfolio"
import Contact from "./components/pages/Contact"

function App () {
  return (
    <Router>
    <div>
    {/* <Switch> */}
      <Header/>
      <Route exact path ='/react-portfolio' component = {Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route path='/contact' component={Contact} /> 
      <Footer/>
      {/* </Switch> */}
      
  </div>
  </Router>
  ) 
}

export default App
