import { useState } from "react"
import { useForm } from "../../../common/hooks/useForm"
import { BgMultiTeam } from "../../../common/components/BgMultiTeam"

const mockUser = {
  displayName: 'josema',
  userName: null,
  email: 'josemajosemajosema@gmail.com',
  // photoURL: 'https://lh3.googleusercontent.com/ogw/AF2bZyhVxbt5K8E-twEMx2qOOb7dCdxh0dqwKii330aidFJ5o2E=s32-c-mo',
  photoURL: "https://lh3.googleusercontent.com/a/ACg8ocJsGupP1u3X7aM0MYNIHqoW2xJ70T-juGZjnF1tlCJBaQmge9y3=s288-c-no",
  team: null,
  uid: '12234',
}

export const ConfigUserPage = () => {

  const [currentUser] = useState(mockUser)

  const { userName, team, onInputChange } = useForm({
    userName: currentUser.userName || '',
    team: currentUser.team || 'mystic'
  })

  const onSubmit = (e) => {
    e.preventDefault()
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
            {/* <label htmlFor="userName">Apodo</label> */}
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
