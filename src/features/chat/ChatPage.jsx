
import './chat.css'
import { Navbar } from '../../common/ui/Navbar';
import { Friends } from './components/friends/Friends';
import { Messages } from './components/messages/Messages';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getTeamColorsBG } from '../../common/utils/getTeamColor';

export const ChatPage = () => {

  const currentUser = useSelector( state => state.auth )
  const hasConfigUserName = currentUser.userName;

  if(!hasConfigUserName){
      return <Navigate to='/user/config' />
  }

  const teamsColor = getTeamColorsBG(currentUser.team)

  return (
    <div className={`chat-page ${teamsColor}`}>

      <Navbar pageUrl={{path:'/user/config', name:'config'}}/>

      <div className='chat-page__content'>

        <Friends />
        <Messages />

      </div>
    </div>
  )
}
