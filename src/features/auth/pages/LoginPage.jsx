import { useDispatch } from "react-redux"
import { startGoogleSignIn } from "../../../app/state/auth/thunks";

export const LoginPage = () => {

    const dispatch = useDispatch();

    const onGoogleLogin = () => {
        dispatch( startGoogleSignIn() )
      }

    return (
        <div className="login-page">

            <div className="login-page__team login-page__team--mystic">
                <img 
                    className="login-page__img" 
                    src="/assets/img/mystic.png" 
                    alt="instinct" 
                />   
            </div>

            <div className="login-page__team login-page__team--valor">
                <img 
                    className="login-page__img" 
                    src="/assets/img/valor.png" 
                    alt="instinct" 
                />
            </div>

            <div className="login-page__team login-page__team--instinct">
                <img 
                    className="login-page__img" 
                    src="/assets/img/instinct.png" 
                    alt="instinct" 
                />
            </div>

            <div className="login-page__form">
                <div className="login-page__form--content">
                    <h2 className="login-page__form--title">pokemon chat</h2>
                    <p className="login-page__form--location">mar del plata</p>
                    <p className="login-page__form--prompt">ingresar con</p>
                    <button 
                        className="login-page__form--button"
                        onClick={ onGoogleLogin }
                    >google</button>
                </div>
            </div>

        </div>
    )
}
