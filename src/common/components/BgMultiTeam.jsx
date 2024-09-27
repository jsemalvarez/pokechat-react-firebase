
export const BgMultiTeam = ({ children }) => {
  return (
    <div className='multi-team'>
        <div className="multi-team__team multi-team__team--mystic">
            <img 
                className="multi-team__img" 
                src="/assets/img/mystic.png" 
                alt="instinct" 
            />   
        </div>

        <div className="multi-team__team multi-team__team--valor">
            <img 
                className="multi-team__img" 
                src="/assets/img/valor.png" 
                alt="instinct" 
            />
        </div>

        <div className="multi-team__team multi-team__team--instinct">
            <img 
                className="multi-team__img" 
                src="/assets/img/instinct.png" 
                alt="instinct" 
            />
        </div>
        <div className="multi-team__content">
            { children }
        </div>
    </div>
  )
}
