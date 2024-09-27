import { useForm } from "../../../common/hooks/useForm"
import { BgMultiTeam } from "../../../common/components/BgMultiTeam"
import { useDispatch, useSelector } from "react-redux"
import { startSaveUser } from "../../../app/state/auth/thunks"


export const ConfigUserPage = () => {

  const currentUser = useSelector( state => state.auth);
  const dispatch = useDispatch()


  const { userName, team, onInputChange } = useForm({
    userName: currentUser.userName || '',
    team: currentUser.team || 'mystic'
  })

  const onSubmit = (e) => {
    e.preventDefault()

    // TODO: validar que el userName no este vacio 
    if( userName.trim() === ""){
      console.log('el userName no puede estar vacio')
      return;
    }

    const newUser = {
      displayName: currentUser.displayName,
      userName: userName,
      email: currentUser.email,
      photoURL: currentUser.photoURL,
      team: team,
      uid: currentUser.uid,
    }

    // TODO: validar si el userName ya no esta en uso
    // TODO: solo se guarda la primera vez, 
    // el resto de las veces hay que hacer un update
    dispatch( startSaveUser(newUser) )
    // TODO: notificar al usuario que se guardo bien
  }

  return (
    <BgMultiTeam>
      <div className="config-user-page">
        <form 
          onSubmit={ onSubmit}
          className="config-user-page__form"
        >

          <div className="config-user-page__user-info">
            <img 
              src={ currentUser.photoURL } 
              className="config-user-page__img"
            />
            <p> { currentUser.displayName } </p>
            <p> { currentUser.email } </p>
          </div>

          <div className="config-user-page__input-container"> 
            <input 
              className="config-user-page__input"
              type="text" 
              id="userName"
              name="userName"
              value={ userName }
              onChange={ onInputChange }
              placeholder="A P O D O"
            />
          </div>


          <div className="config-user-page__input-container">
            <h4>TEAM:</h4>

            <label 
              htmlFor="mystic"
              className="config-user-page__team-label config-user-page__team-label--mystic"
            > 
              Mystic
              <input 
                type="radio" 
                name="team" 
                id="mystic"
                value="mystic" 
                onChange={ onInputChange } 
                checked={ team === 'mystic'}
              />
            </label>

            <label 
              htmlFor="valor"
              className="config-user-page__team-label config-user-page__team-label--valor"
            > 
              Valor 
              <input 
                type="radio" 
                name="team" 
                id="valor"
                value="valor" 
                onChange={ onInputChange } 
                checked={ team === 'valor'}
              />
            </label>

            <label 
              htmlFor="instinct"
              className="config-user-page__team-label config-user-page__team-label--instinct"
            > 
              Instinct 
              <input 
                type="radio" 
                name="team" 
                id="instinct"
                value="instinct" 
                onChange={ onInputChange } 
                checked={ team === 'instinct'}
              />
            </label>

          </div>

          <button 
            className="config-user-page__buttom"
            type="submit"
          >Guardar</button>


        </form>
      </div>
    </BgMultiTeam>
  )
}
