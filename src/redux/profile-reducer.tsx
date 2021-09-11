import {ActionType} from "./redux-store";

//types:
type PostType = {
    id: number
    message: string
    likesCount: number
    isLiked: boolean
}
export type ProfileInitialStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfilePageType | null//!!!!
}

export type ProfilePageType = {
    aboutMe: string,
    contacts: LinksType,
    lookingForAJob: boolean,
    lookingForAJobDescription: null | string,
    fullName: string,
    userId: number,
    photos: PhotosType
}
type LinksType = {
    facebook: null | string,
    website: null | string,
    vk: null | string,
    twitter: null | string,
    instagram: null | string,
    youtube: null | string,
    github: null | string,
    mainLink: null | string
}
export type PhotosType = { small: string, large: string }


//initialState:
const initialState: ProfileInitialStateType = {
    posts: [
        {id: 1, message: "Hi dude", likesCount: 2, isLiked: false},
        {id: 2, message: "nice photos!", likesCount: 1, isLiked: false},
    ],
    newPostText: "",
    profile: null
}

//reducer:
const profileReducer = (state: ProfileInitialStateType = initialState, action: ActionType): ProfileInitialStateType => {
    switch (action.type) {
        case "SN/PROFILE/ADD_POST": {
            const stateCopy = {...state}
            const newPost: PostType = {
                id: Math.floor(new Date().valueOf() * Math.random()), //Create a unique number with javascript time
                message: state.newPostText,
                likesCount: 0,
                isLiked: false
            };
            stateCopy.posts = [newPost, ...state.posts];
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case"SN/PROFILE/SET_NEW_POST_TEXT": {
            const stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case "SN/PROFILE/ADD_LIKE": {
            const stateCopy = {
                ...state, posts: state.posts.map(p => {
                    if (p.id === action.id) {
                        return {...p, isLiked: true, likesCount: p.likesCount + 1}
                    }
                    return p;
                })
            }
            return stateCopy;
        }
        case "SN/PROFILE/REMOVE_LIKE": {
            const stateCopy = {
                ...state, posts: state.posts.map(p => {
                    if (p.id === action.id) {
                        return {...p, isLiked: false, likesCount: p.likesCount - 1}
                    }
                    return p;
                })
            }
            return stateCopy;
        }
        case "SN/PROFILE/SET_PROFILE": {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

//action creators:
export const addPost = (newPost: string) => {
    return {type: "SN/PROFILE/ADD_POST", newPost} as const
}
export const setNewPostText = (newText: string) => {
    return {type: "SN/PROFILE/SET_NEW_POST_TEXT", newText} as const
}
export const addLike = (id: number, isLiked: boolean) => {
    return {type: "SN/PROFILE/ADD_LIKE", id, isLiked} as const
}
export const removeLike = (id: number, isLiked: boolean) => {
    return {type: "SN/PROFILE/REMOVE_LIKE", id, isLiked} as const
}
export const setProfile = (profile: ProfilePageType) => {
    return{ type: "SN/PROFILE/SET_PROFILE", profile} as const
}

export {
    profileReducer
}