import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../../features/auth/pages/LoginPage';
import { ConfigUserPage } from '../../features/users/pages/ConfigUserPage';



export const AppRoutes = () => {

  const status = 'authenticated';

  if ( status === 'checking' ) {
    return <p>Cargando...</p>
  }


  return (
    <Routes>

        {
          (status === 'authenticated')
           ? <Route path="/*" element={ <ConfigUserPage /> } />
           : <Route path="/auth/login" element={ <LoginPage /> } />
        }

        <Route path='/*' element={ <Navigate to='/auth/login' />  } />


    </Routes>
  );
}