import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"

import { doc, onSnapshot } from "firebase/firestore";
import { FirebaseDB } from "../../../../app/firebase/config";
import { Message } from "./Message";
import { getTeamColorsMessagesContent } from "../../../../common/utils/getTeamColor";

export const MessagesContent = () => {

    const {chat, auth } = useSelector(state => state)

    const friend = chat.friend
    const currentUser = auth
  
    const containerRef = useRef(null);
    const [messages, setMessages] = useState([])
  
    useEffect(() => {
      const roomRef = doc(FirebaseDB, "rooms", friend.roomid);
      const unSubscribe = onSnapshot(roomRef, (document) => {
        setMessages(document.data()?.messages);
      });
  
      return () => unSubscribe();
  
    }, [friend]);

    useEffect(() => {
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      }, [messages]);

    const teamColors = getTeamColorsMessagesContent(friend.team)

    return (
        <div 
            ref={ containerRef }
            className={`messages__content ${teamColors}`}
        >

            {
                messages.map( (message, index) => {
                    return(
                        <Message
                            key={index}
                            message={message.message}
                            timestamp={message.timestamp}
                            isCurrentUser={message.uid == currentUser.uid}
                            team={message.uid == currentUser.uid? currentUser.team : friend.team}
                        />
                    )
                })
            }
        </div>
    )
}
