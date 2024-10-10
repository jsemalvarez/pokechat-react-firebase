import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { FirebaseDB } from "../../../../app/firebase/config";

import { FriendSearch } from "./FriendSearch";
import { FriendItem } from './FriendItem';
import { getTeamColorsFriends } from "../../../../common/utils/getTeamColor";
import { setFriends } from "../../../../app/state/auth/authSlice";

export const Friends = () => {

    const currentUser = useSelector( state => state.auth )
    const currentChat = useSelector( state => state.chat )
    const dispatch = useDispatch();

    // const [friends, setFriends] = useState([]);
    const friends = currentUser.friends

    useEffect(() => {

        const userRef = doc(FirebaseDB, "users", currentUser.uid);
        const unsubcribe = onSnapshot(userRef, (usersDocument) => {
    
            // traigo la informacion de mis amigos
            const friendPromises = usersDocument.data()?.rooms.map((room) => {
                const friendRef = doc(FirebaseDB, "users", room.friendId);
                return getDoc(friendRef);
            });
    
            Promise.all(friendPromises).then((friendResponses) => {
                const friendsFormated = friendResponses.map((friendResponse) => {

                    const friend = friendResponse.data();
                    
                    const room = usersDocument
                        .data()
                        ?.rooms.find((room) => room.friendId === friendResponse.id);       
                
                    return {
                        uid: friend.uid,
                        displayName: friend.displayName,
                        userName: friend.userName,
                        team: friend.team,
                        photoURL: friend.photoURL,
                        roomid: room?.roomid,
                        lastMessage: room?.lastMessage,
                        timestamp: room.timestamp,
                    };
                });
        
                // setFriends(friendsFormated);
                dispatch( setFriends(friendsFormated) )
            });
        });
    
        return unsubcribe;
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      const isHideFriendsOnMovile = !!currentChat?.friend;

      const colorsTeam = getTeamColorsFriends(currentUser.team);

      const style = `friends ${colorsTeam} ${isHideFriendsOnMovile ? 'hide-on-movile': ''}`

    return (
        <div className={style}>
            <FriendSearch />

            {
                friends.map( friend => (
                    <FriendItem key={ friend.id } friend={ friend } />
                ))
            }
        </div>
    )
}
