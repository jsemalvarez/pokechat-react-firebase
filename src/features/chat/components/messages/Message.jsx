import { getTeamColorsMessage } from "../../../../common/utils/getTeamColor"

export const Message = ({
    isCurrentUser,
    message,
    timestamp,
    team
}) => {

    const colorTeam = getTeamColorsMessage(team)

    return(
        <div className={ `messages__message-item ${colorTeam} ${isCurrentUser ? 'messages__message-item--right': 'messages__message-item--left'}` }>
            {message}
        </div>
    )
}
