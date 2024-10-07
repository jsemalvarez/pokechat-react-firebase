export const getTeamColorsBG= (team) => {

    switch (team) {
        case 'mystic':
            return 'bg-color--mystic'
        case 'valor':
            return 'bg-color--valor'
        case 'instinct':
            return 'bg-color--instinct'
        default:
            return 'bg-color--mystic';
    }
}

export const getTeamColorsNavbar = (team) => {

    switch (team) {
        case 'mystic':
            return 'navbar--mystic'
        case 'valor':
            return 'navbar--valor'
        case 'instinct':
            return 'navbar--instinct'
        default:
            return 'navbar--mystic';
    }
}

export const getTeamColorsFriends = (team) => {

    switch (team) {
        case 'mystic':
            return 'friends--mystic'
        case 'valor':
            return 'friends--valor'
        case 'instinct':
            return 'friends--instinct'
        default:
            return 'friends--mystic';
    }
}

export const getTeamColorsFriendSearch = (team) => {

    switch (team) {
        case 'mystic':
            return 'friends__search--mystic'
        case 'valor':
            return 'friends__search--valor'
        case 'instinct':
            return 'friends__search--instinct'
        default:
            return 'friends__search--mystic';
    }
}

export const getTeamColorsFriendItem = (team) => {

    switch (team) {
        case 'mystic':
            return 'friend friend--mystic'
        case 'valor':
            return 'friend friend--valor'
        case 'instinct':
            return 'friend friend--instinct'
        default:
            return 'friend friend--mystic';
    }
}

export const getTeamColorsMessageHeader = (team) => {

    switch (team) {
        case 'mystic':
            return 'messages__header--mystic'
        case 'valor':
            return 'messages__header--valor'
        case 'instinct':
            return 'messages__header--instinct'
        default:
            return 'messages__header--mystic';
    }
}

export const getTeamColorsMessagesContent = (team) => {

    switch (team) {
        case 'mystic':
            return 'messages__content--mystic'
        case 'valor':
            return 'messages__content--valor'
        case 'instinct':
            return 'messages__content--instinct'
        default:
            return 'messages__content--mystic';
    }
}

export const getTeamColorsMessage= (team) => {

    switch (team) {
        case 'mystic':
            return 'messages__message-item--mystic'
        case 'valor':
            return 'messages__message-item--valor'
        case 'instinct':
            return 'messages__message-item--instinct'
        default:
            return 'messages__message-item--mystic';
    }
}

export const getTeamColorsChatFooter = (team) => {

    switch (team) {
        case 'mystic':
            return 'messages__footer--mystic'
        case 'valor':
            return 'messages__footer--valor'
        case 'instinct':
            return 'messages__footer--instinct'
        default:
            return 'messages__footer--mystic';
    }
}

export const getTeamColorsChatFooterInput = (team) => {

    switch (team) {
        case 'mystic':
            return 'input-message--mystic'
        case 'valor':
            return 'input-message--valor'
        case 'instinct':
            return 'input-message--instinct'
        default:
            return 'input-message--mystic';
    }
}