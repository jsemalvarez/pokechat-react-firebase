import { logoutFirebase, singInWithGoogle } from "../../firebase/authProvider"
import { saveUser } from "../../firebase/firestoreProvider"
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

        dispatch( login(resultSingIn))
    }
}

export const startSaveUser = ( user ) => {
    return async ( dispatch ) => {

        dispatch( checkingCredentials() )

        const result = await saveUser( user )
        if( !result.ok ) return dispatch( logout( result.errorMessage ) )

        dispatch( login( result ) )
    }
}

export const startLogOut = () => {
    return async( dispatch ) => {
        
        await logoutFirebase()

        dispatch( logout({errorMessage: null}) )
    }
}
