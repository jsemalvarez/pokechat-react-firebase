import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../../features/auth/pages/LoginPage';
import { ConfigUserPage } from '../../features/users/pages/ConfigUserPage';
import { Loader } from '../../common/components/Loader';
import { useCheckAuth } from '../../common/hooks/useCheckAuth';



export const AppRoutes = () => {

  const status = useCheckAuth();

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