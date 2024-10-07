import { useDispatch } from "react-redux"
import { setFriend } from "../../../../app/state/chat/chatSlice"
import { getTeamColorsFriendItem } from "../../../../common/utils/getTeamColor"

export const FriendItem = ({friend}) => {

  const dispatch = useDispatch()

  const onSetFriend = () => {
    dispatch( setFriend( friend ) )
  }

  const teamColors = getTeamColorsFriendItem(friend.team)

  //TODO: cambiar div por button
  return (
    <div 
      className={teamColors}
      onClick={ onSetFriend }
    >
        <img src={friend.photoURL} alt={friend.userName} />
        <p>{friend.userName}</p>
    </div>
  )
}
