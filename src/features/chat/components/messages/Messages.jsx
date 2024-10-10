import { useSelector } from 'react-redux'
import { MessagesHeader } from './MessagesHeader';
import { MessagesFooter } from './MessagesFooter';
import { MessagesContent } from './MessagesContent';
import { EmptyChat } from './EmptyChat';

export const Messages = () => {

    const currentChat = useSelector( state => state.chat);
    
    if(currentChat.friend == null){
        return (
            <div className="messages">
                <EmptyChat />
            </div>
        )
    }

    const isShowMessagesOnMovile = !!currentChat?.friend;

    const style = `messages ${isShowMessagesOnMovile ? '': 'hide-on-movile'}`

    return (
        <div className={style}>

            <MessagesHeader friend={ currentChat.friend }/>
            <MessagesContent />
            <MessagesFooter />

        </div>
    )
}
