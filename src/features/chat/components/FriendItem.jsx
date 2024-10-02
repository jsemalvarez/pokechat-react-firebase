
export const FriendItem = ({friend}) => {
  return (
    <div className='friend friend--mystic'>
        <img src={friend.photoURL} alt={friend.userName} />
        <p>{friend.userName}</p>
    </div>
  )
}
