import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogOut } from '../../app/state/auth/thunks';

export const Navbar = () => {

    const dispatch = useDispatch();
    const currentUser = useSelector( state => state.auth);

    const handleLogOut = () => {
        dispatch( startLogOut() )
    }

    return (
        <nav className="navbar">
        <h2>Pokechat MdP</h2>
        <div className='navbar__right-items'>
            <img src={currentUser.photoURL} alt={currentUser.userName} />
            <ul>
                <li><h4 className='user-name'>{currentUser.userName}</h4></li>
                <li><Link to='/user/config'>config</Link></li>
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
