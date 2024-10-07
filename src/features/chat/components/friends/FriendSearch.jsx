import { useSelector } from "react-redux"
import { useForm } from "../../../../common/hooks/useForm"
import { addFriend, getFriendByUserName } from "../../../../app/firebase/firestoreProvider"
import { getTeamColorsFriendSearch } from "../../../../common/utils/getTeamColor"

export const FriendSearch = () => {

    const currentUser = useSelector( state => state.auth)

    const { userName, onInputChange } = useForm({
        userName:''
    })

    const onSerachFriend = async() => {

        if ( userName.trim() === '') {
            console.log('userName no puede estar vacio')
            return;
        }

        const isMyUserName = currentUser.userName === userName
        if ( isMyUserName) {
            console.log('no te puedes agregar a ti mismo')
            return;
        }

        const friends = currentUser.friends || []
        const isAlreadyFriend = friends.find( friend => friend.email === userName)
        if(isAlreadyFriend){
            console.log('ya son amigos')
            return;
        }
        
        const result = await getFriendByUserName(userName)

        if(!result.ok){
            console.log(result.errorMessage)
            return;
        }

        const newFriend = result.data;
        await addFriend(currentUser, newFriend)
    }

    const colorsTeam = getTeamColorsFriendSearch(currentUser.team)

    return (
        <div className={`friends__search ${colorsTeam}`}>
            <span>*se agregan automaticamente</span>
            <input 
                type="text"
                name="userName"
                placeholder='nombre del jugador'
                value={ userName }
                onChange={ onInputChange }
            />
            <button
                onClick={ onSerachFriend }
            >Agregar amigo</button>
        </div>
  )
}
