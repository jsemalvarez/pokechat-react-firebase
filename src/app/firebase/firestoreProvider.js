import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, limit, query, setDoc, updateDoc, where } from "firebase/firestore";
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

export const getFriendByUserName = async( userName ) => {

    try {

       const customQuery = query(
           collection( FirebaseDB, "users"),
           where("userName", "==", userName),
           limit(1)
       )

       const querySnapshot = await getDocs(customQuery);

       if (querySnapshot.empty) {
           throw new Error(`No se encontro ningun usuario con el userName ${userName}`)
       }

       const friendDB = querySnapshot.docs[0].data();

       return {
           ok: true,
           data: friendDB
       }
       
    } catch (error) {
       const errorMessage = error.message
       return {
           ok: false,
           errorMessage
       }
    }
}

export const addFriend = async (currentUser, newFriend) => {

    try {

        // crear la room
        const newRoomDB = {
            messages: [],
            users: [currentUser?.uid, newFriend.uid],
        };
        const roomRef = await addDoc(collection(FirebaseDB, "rooms"), newRoomDB);

        // agregar la room al currentUser
        const currentUserRoom = {
            roomid: roomRef.id,
            lastMessage: "",
            timestamp: "",
            friendId: newFriend.uid,
          };

        const currentUserRef = doc(FirebaseDB, "users", currentUser.uid);

        await updateDoc(currentUserRef, {
            rooms: arrayUnion(currentUserRoom),
            friends: arrayUnion(newFriend.uid),
        });
    
        // agregar la room al newUser
          const newFriendRoom = {
            roomid: roomRef.id,
            lastMessage: "",
            timestamp: "",
            friendId: currentUser.uid,
          };

        
        const newFriendRef = doc(FirebaseDB, "users", newFriend.uid);    

        await updateDoc(newFriendRef, {
            rooms: arrayUnion(newFriendRoom),
            friends: arrayUnion(currentUser.uid),
        });
        
        return{
            ok: true
        }

    } catch (error) {
        const errorMessage = error.message
        return {
            ok: false,
            errorMessage
        }
    }

}

const updateLastMessage = async ({ db, uid, roomid, message }) => {

    const userRef = doc(db, "users", uid);
    const { rooms } = (await getDoc(userRef)).data();
  
    const roomUpdateLastMessage = rooms.map((room) => {
      if (room.roomid === roomid) {
        return {
          ...room,
          lastMessage: message,
          timestamp: new Date().toISOString(),
        };
      }
      return room;
    });

    await updateDoc(userRef, {
      rooms: roomUpdateLastMessage,
    });
  };

export const saveMessage = async(currentUser, friend, message) => {

    try {

        const roomId = friend.roomid;

        const roomRef = doc(FirebaseDB, "rooms", roomId);
        await updateDoc(roomRef, {
          messages: arrayUnion({
            message,
            timestamp: new Date().toISOString(),
            uid: currentUser.uid,
          }),
        });

        await updateLastMessage({ 
            db: FirebaseDB, 
            uid: currentUser.uid, 
            roomid: roomId, 
            message: message 
        });

        await updateLastMessage({ 
            db: FirebaseDB, 
            uid: friend.uid, 
            roomid: roomId, 
            message: message 
        });

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