import { Navigate, Route, Routes } from "react-router-dom"
import { ConfigUserPage } from "../../features/users/pages/ConfigUserPage"
import { ChatPage } from "../../features/chat/Chatpage";

export const PrivateRoutes = () => {

    return (
        <Routes>

            <Route path="/user/config" element={ <ConfigUserPage /> } />
            <Route path="/chat" element={ <ChatPage /> } />

            <Route path='/*' element={ <Navigate to='/chat' />  } />
        </Routes>
    )
}
