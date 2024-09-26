import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../../features/auth/pages/LoginPage';
import { ConfigUserPage } from '../../features/users/pages/ConfigUserPage';
import { Loader } from '../../common/components/Loader';



export const AppRoutes = () => {

  const status = 'authenticated'; // checking / authenticated

  if ( status === 'checking' ) {
    return <Loader />
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