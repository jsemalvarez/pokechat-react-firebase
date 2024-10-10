import { useSelector } from "react-redux"
import { useForm } from "../../../../common/hooks/useForm"
import { addFriend, getFriendByUserName } from "../../../../app/firebase/firestoreProvider"
import { getTeamColorsFriendSearch, getTeamColorsInput } from "../../../../common/utils/getTeamColor"
import { useState } from "react"

export const FriendSearch = () => {

    const currentUser = useSelector( state => state.auth)

    const { userName, onInputChange } = useForm({
        userName:''
    })

    const [errorMessage, setErrorMessage] = useState(null)

    const onSerachFriend = async( e ) => {
        e.preventDefault()

        if ( userName.trim() === '' ) {
            setErrorMessage('userName no puede estar vacio')
            return;
        }

        const isMyUserName = currentUser.userName === userName
        if ( isMyUserName) {
            setErrorMessage('no te puedes agregar a ti mismo')
            return;
        }

        const friends = currentUser.friends || []
        const isAlreadyFriend = friends.find( friend => friend.userName === userName)
        if(isAlreadyFriend){
            setErrorMessage('ya son amigos')
            return;
        }
        
        const result = await getFriendByUserName(userName)

        if(!result.ok){
            setErrorMessage(result.errorMessage)
            return;
        }

        const newFriend = result.data;
        await addFriend(currentUser, newFriend)
        setErrorMessage('')
    }

    const colorsTeam = getTeamColorsFriendSearch(currentUser.team)
    const colorTeamsInput = getTeamColorsInput(currentUser.team)

    return (
        <form 
            onSubmit={ onSerachFriend }
            className={`friends__search ${colorsTeam}`}
        >          
            
            {
                (errorMessage)
                    ? (<div className="error">{errorMessage}</div>)
                    : (<span>*se agregan automaticamente</span>)
            }

            <input 
                className={ colorTeamsInput }
                type="text"
                name="userName"
                placeholder='apodo del jugador'
                value={ userName }
                onChange={ onInputChange }
            />

            <button 
                type="submit" 
                disabled={ userName.trim() === '' }
            >Agregar amigo</button>

        </form>
  )
}
