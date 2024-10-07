import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogOut } from '../../app/state/auth/thunks';
import { getTeamColorsNavbar } from '../utils/getTeamColor';

export const Navbar = ({pageUrl}) => {

    const dispatch = useDispatch();
    const currentUser = useSelector( state => state.auth);

    const handleLogOut = () => {
        dispatch( startLogOut() )
    }

    const colorsTeam = getTeamColorsNavbar(currentUser.team);

    return (
        <nav className={`navbar ${colorsTeam}`}>
        <h2 className='navbar__title hide-on-movile'>Pokechat MdP</h2>
        <div className="navbar__img-content">
            <img src={currentUser.photoURL} alt={currentUser.userName} />
        </div>
        <div className='navbar__right-items'>
            <ul>
                <li><h4 className='user-name'>{currentUser.userName}</h4></li>
                <li><Link to={ pageUrl.path }>{ pageUrl.name }</Link></li>
                <li>
                    <button 
                        className='btn-close'
                        onClick={ handleLogOut }
                    >salir</button>
                </li>
            </ul>
        </div>
    </nav>
  )
}
