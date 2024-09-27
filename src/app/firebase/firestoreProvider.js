import { doc, getDoc, setDoc } from "firebase/firestore";
import { FirebaseDB } from "./config";


export const getUserById = async (uid) => {

    try {

        const docRef = doc(FirebaseDB, `users`, uid);
        const result = await getDoc(docRef);

        if(result.exists()){
            return {
                ok: true,
                userDB: result.data()
            }
        }

        throw new Error('user not found');
        
    } catch (error) {
        const errorMessage = error.message
        return {
            ok: false,
            errorMessage
        }
    }
}

export const saveUser = async ( newUser) => {

    const userDB = {
        displayName: newUser.displayName,
        userName: newUser.userName,
        email: newUser.email,
        photoURL: newUser.photoURL,
        team: newUser.team,
        uid: newUser.uid,
        friends: [],
        rooms: []
    }

    try {

        const userDBRef = doc( FirebaseDB, `users`, newUser.uid ); 
        await setDoc( userDBRef, userDB, { merge: true });

        return {
            ok: true
        }
        
    } catch (error) {
        
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        }
    }

}