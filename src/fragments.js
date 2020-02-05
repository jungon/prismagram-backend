export const COMMENT_FRAGMENT = `
    id
    text
    user {
        ${USER_FRAGMENT}
    }
`;

export const USER_FRAGMENT = `
    id
    username
    avatar
`;

export const FILE_FRAGMENT = `
fragment FileParts on File {
    id
    username
}`;

export const POST_FRAGMENT = `
fragment PostParts on Post {
    id
    location
    caption
    user {
        id
        username
    }
}`;

export const FULL_POST_FRAGMENT = `
fragment PostParts on Post {
    id
    location
    caption
    user {
        id
        username
    }
    files {
        id
        url
    }
    comments {
        id
        text
        user {
            username
        }
    }
}`;

export const MESSAGE_FRAGMENT = `
    id
    text
    from {
        ${USER_FRAGMENT}
    }
    to {
        ${USER_FRAGMENT}
    }
`;

export const ROOM_FRAGMENT = `
fragment RoomParts on Room {
    id
    participants {
        ${USER_FRAGMENT}
    }
    messages {
        ${MESSAGE_FRAGMENT}
    }
}`;
