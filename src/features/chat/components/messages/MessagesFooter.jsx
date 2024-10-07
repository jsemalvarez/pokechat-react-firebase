import { useSelector } from 'react-redux';
import { useForm } from '../../../../common/hooks/useForm'
import { updateMessage } from '../../../../app/firebase/firestoreProvider';
import { getTeamColorsChatFooter, getTeamColorsChatFooterInput } from '../../../../common/utils/getTeamColor';

export const MessagesFooter = () => {

    const {auth, chat } = useSelector(state => state)

    const currentUser = auth;
    const friend = chat.friend
  
    const { message, onInputChange, onResetForm } = useForm({
      message: ''
    })
  
    const onClick = async () => {
      await updateMessage( currentUser, friend, message )
      onResetForm();
    }

    const colorTeamsChat = getTeamColorsChatFooter(currentUser.team)
    const colorTeamsInput = getTeamColorsChatFooterInput(currentUser.team)

    return (
        <div className={`messages__footer ${colorTeamsChat}`}>
            <input 
                className={`input-message ${ colorTeamsInput }`}
                type="text" 
                name="message" 
                value={message}
                onChange={ onInputChange }
            />
            <button
                className='btn-send'
                onClick={onClick}
            >Enviar</button>
        </div>
    )
}
