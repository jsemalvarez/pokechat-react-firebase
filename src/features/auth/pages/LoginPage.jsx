
export const LoginPage = () => {
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
            <div className="form__from--content">
                <h2>pokemon chat</h2>
                <p>mar del plata</p>
                <p>ingresar con</p>
                <button>google</button>
            </div>
        </div>

    </div>
  )
}
