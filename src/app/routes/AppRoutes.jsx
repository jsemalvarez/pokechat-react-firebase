import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../../features/auth/pages/LoginPage';
import { Loader } from '../../common/components/Loader';
import { useCheckAuth } from '../../common/hooks/useCheckAuth';
import { PrivateRoutes } from './PrivateRoutes';



export const AppRoutes = () => {

  const status = useCheckAuth();

  if ( status === 'checking' ) {
    return <Loader />
  }


  return (
    <Routes>

        {
          (status === 'authenticated')
           ? <Route path="/*" element={ <PrivateRoutes /> } />
           : <Route path="/auth/login" element={ <LoginPage /> } />
        }

        <Route path='/*' element={ <Navigate to='/auth/login' />  } />


    </Routes>
  );
}