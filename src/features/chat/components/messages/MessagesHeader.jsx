import { setFriend } from '../../../../app/state/chat/chatSlice';
import { useDispatch } from 'react-redux';
import { getTeamColorsMessageHeader } from '../../../../common/utils/getTeamColor';

export const MessagesHeader = ({friend}) => {

    const dispatch = useDispatch();

    const onClick = () => {
      dispatch( setFriend(null) );
    }

    const teamColors = getTeamColorsMessageHeader(friend.team)

    return (
        <div className={`messages__header ${teamColors}`}>
            <img src={friend.photoURL} alt={friend.userName} />
            <h4 className='user-name'>{friend.userName}</h4>
            <button 
                className='btn-close'
                onClick={onClick}
            >cerrar</button>
        </div>
    )
}
