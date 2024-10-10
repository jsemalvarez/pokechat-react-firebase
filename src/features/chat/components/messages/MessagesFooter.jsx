import { useSelector } from 'react-redux';
import { useForm } from '../../../../common/hooks/useForm'
import { saveMessage } from '../../../../app/firebase/firestoreProvider';
import { getTeamColorsChatFooter, getTeamColorsInput } from '../../../../common/utils/getTeamColor';

export const MessagesFooter = () => {

    const {auth, chat } = useSelector(state => state)

    const currentUser = auth;
    const friend = chat.friend
  
    const { message, onInputChange, onResetForm } = useForm({
      message: ''
    })
  
    const onSendMessage = async ( e ) => {
        e.preventDefault()
        if(message.trim() === '') return 
        await saveMessage( currentUser, friend, message )
        onResetForm();
    }

    const colorTeamsChat = getTeamColorsChatFooter(currentUser.team)
    const colorTeamsInput = getTeamColorsInput(currentUser.team)

    return (
        <form
            onSubmit={ onSendMessage }
            className={`messages__footer ${colorTeamsChat}`}
        >
            <input 
                className={`input-message ${ colorTeamsInput }`}
                type="text" 
                name="message" 
                value={message}
                onChange={ onInputChange }
            />
            <button
                type='subit'
                className='btn-send'
                disabled={ message.trim() === '' }
            >Enviar</button>
        </form>
    )
}
