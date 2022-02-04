import { Fragment } from 'react';
import {Route , Redirect , Switch}  from 'react-router-dom'
import   Quiz from './pages/Quiz';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Navbar from './components/Navbar'
function App() {

  
  return (
    <Fragment>
<Navbar/>
       <Switch>
       <Route path="/" exact>
         <Redirect to="/home">

         </Redirect>
       </Route>
         <Route path="/home"  exact>
              <Home/>
         </Route>
         <Route path="/quiz"  exact>
              <Quiz/>
              </Route>
              <Route path="/settings"  exact>
              <Settings/>
              </Route>
              <Route path="*"  >
               
              </Route>
       </Switch>
 

 
    </Fragment>
  
  );
}

export default App;
