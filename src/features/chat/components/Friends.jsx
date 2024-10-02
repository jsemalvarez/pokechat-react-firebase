import { useSelector } from 'react-redux';
import { FriendSearch } from './FriendSearch'
import { FriendItem } from './FriendItem';

export const Friends = () => {

    const currentUser = useSelector( state => state.auth);

    const friends = currentUser?.friends || []

    return (
        <div className='friends'>
            <FriendSearch />

            {
                friends.map( friend => (
                    <FriendItem key={ friend.id } friend={ friend } />
                ))
            }
        </div>
    )
}
