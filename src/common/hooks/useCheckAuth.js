import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

import { FirebaseAuth } from "../../app/firebase/config";

import { getUserById } from "../../app/firebase/firestoreProvider";
import { login, logout } from "../../app/state/auth/authSlice";

export const useCheckAuth = () => {

    const {status} = useSelector( state => state.auth )
    const dispatch = useDispatch()

    useEffect(() => {

        onAuthStateChanged( FirebaseAuth, async( userLoggedInGoogle )=> {

            if( !userLoggedInGoogle ) return dispatch( logout() )

            const response = await getUserById(userLoggedInGoogle.uid)

            response.ok
                ? dispatch( login( response.userDB ) ) // userDB puede ir al chat
                : dispatch( login( userLoggedInGoogle ) ) // userLoggedInGoogle tiene que configurar el userDB para ir al chat

        })

    },[dispatch])
  
    return status;
}
