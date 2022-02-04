import React, { Fragment, Suspense } from 'react';
import {Route , Redirect , Switch }  from 'react-router-dom'
import   Quiz from './pages/Quiz';

import Settings from './pages/Settings';
import Loader  from './components/main/Loader/Loader';
// import LoaderSvg from './components/main/Loader/LoaderSvg';
// import Navbar from './components/Navbar'

const Home =  React.lazy(()=>import('./pages/Home'));
const Navbar =  React.lazy(()=> import('./components/Navbar'))
function App() {  
  return (
    
    <Fragment>
    <Suspense  fallback={
      <div>
        
     <Loader/>    
        </div>
    }>

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


  
 </Suspense>



 
    </Fragment>
  
  );
}

export default App;
