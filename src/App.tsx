import { useEffect, useState } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import { claim } from './Auth/auth.models';
import AuthenticationContext from './Auth/AuthenticationContext';
import { getClaims } from './Auth/handleJWT';
import IndexGenres from './genres/IndexGenres';
import Menu from './Menu';
import LandingPage from './movies/LandingPage';
import routes from './route-config';
import configureInterceptor from './utils/httpinterceptors';
import configureValidations from './Validations'

configureValidations();
configureInterceptor();

function App() {
  
  const [claims,setClaims]=useState<claim[]>([  
  ]);

  useEffect(()=>{
    setClaims(getClaims());
  })

  function isAdmin()
  {
    return claims.findIndex(claim=>claim.name==='role' && claim.value==='admin')>-1
  }
  return (
   
    <BrowserRouter>    
    <AuthenticationContext.Provider value={{claims,update:setClaims}}>

    
     <Menu/>
    <div className='container'>
     <Switch>     
      {routes.map(route=>
        <Route key={route.path} path={route.path} exact={route.exact}> 
        {route.isAdmin && !isAdmin()?<>
         You are ot Allowed to see this page
        </>: <route.component/>}
        
        </Route>)}
     </Switch>
    </div>
    <footer className='bd-footer py-5 mt-5 bg-light'>
      <div className='container'>
         React Movies {new Date().getUTCFullYear().toString()}
      </div>

    </footer>
    </AuthenticationContext.Provider>
    </BrowserRouter>
  );
}

export default App;
