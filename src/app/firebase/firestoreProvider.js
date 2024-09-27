import { doc, getDoc } from "firebase/firestore";
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