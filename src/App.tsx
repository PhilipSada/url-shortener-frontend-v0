import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback/ErrorFallback';
import Home from './pages/Home/Home';
import ProtectedRoutes from './routes/ProtectedRoutes';

import './styles/main.scss';
import SharedLayout from './layout/SharedLayout/SharedLayout';

const App: React.FC = () => {

   return (
      <>
         <>
            <Router>
               <Routes>
                  <Route path='/' element={<SharedLayout><Home/></SharedLayout>} />
                  {/* <Route path='/login' element={<ErrorBoundary FallbackComponent={ErrorFallback}><Login /></ErrorBoundary>} />
                  <Route path='/signup' element={<Signup />} /> */}

                   {/* <Route element={<ProtectedRoutes />}>
                       <Route path='/home' element={<Home />} />
                       
                  </Route> */}
               </Routes>

            </Router>
         </>

      </>

   );
}

export default App;
