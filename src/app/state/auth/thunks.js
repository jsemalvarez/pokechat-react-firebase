import { logoutFirebase, singInWithGoogle } from "../../firebase/authProvider"
import { getUserById, saveUser } from "../../firebase/firestoreProvider"
import { checkingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = ( ) => {
    return (dispatch) => {

        dispatch( checkingCredentials() )

    }
}

export const startGoogleSignIn = (  ) => {
    return async(dispatch) => {

        dispatch( checkingCredentials() )
        
        const resultSingIn = await singInWithGoogle()
        if( !resultSingIn.ok ) return dispatch( logout( resultSingIn.errorMessage ))

        const response = await getUserById(resultSingIn.uid)

        response.ok
            ? dispatch( login(response.userDB))
            : dispatch( login(resultSingIn))

    }
}

export const startSaveUser = ( user ) => {
    return async ( dispatch ) => {

        dispatch( checkingCredentials() )

        const result = await saveUser( user )
        if( !result.ok ) return dispatch( logout( result.errorMessage ) )

        dispatch( login( user ) )
    }
}

export const startLogOut = () => {
    return async( dispatch ) => {
        
        await logoutFirebase()

        dispatch( logout({errorMessage: null}) )
    }
}
