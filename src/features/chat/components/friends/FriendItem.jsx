import { useDispatch } from "react-redux"
import { setFriend } from "../../../../app/state/chat/chatSlice"
import { getTeamColorsFriendItem } from "../../../../common/utils/getTeamColor"
import { formatDate } from "../../../../common/utils/formatDate"

export const FriendItem = ({friend}) => {

  const dispatch = useDispatch()

  const onSetFriend = () => {
    dispatch( setFriend( friend ) )
  }

  console.log({friend})

  const teamColors = getTeamColorsFriendItem(friend.team)

  //TODO: cambiar div por button
  return (
    <div 
      className={teamColors}
      onClick={ onSetFriend }
    >
        <img src={friend.photoURL} alt={friend.userName} />
        <div className="friend__name">
          <p><strong>{friend.userName}</strong></p>
          <p><small>{friend.lastMessage}</small></p>
        </div>
        <p><small>{formatDate(friend.timestamp)}</small></p>
    </div>
  )
}
