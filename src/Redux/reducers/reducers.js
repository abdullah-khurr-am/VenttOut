import { createStore } from "redux"

const initialState = {
    UserPosts:[{}],
    Posts: [{}],
}

export const PostsReducer = (state=initialState,action) =>{

    switch (action.type) {
        case "DumpUserPosts":
            return{
                ...state,
                UserPosts:action.payload
            };
            
        case "DumpPosts":
            return{
                ...state,
                Posts:action.payload
            };
            
        case "AddPost":
            return{
                ...state,
                Posts:Posts.push(action.payload)
            };
            
        case "AddUserPost":
            return{
                ...state,
                UserPosts:UserPosts.push(action.payload),
                Posts:Posts.push(action.payload)
            };
            
        case "DeletePost":
            return{
                ...state,
                Posts:Posts.filter((Post) => Post.id!== action.id)
            };
            
        case "DeleteUserPost":
            return{
                ...state,
                Posts:Posts.filter((Post) => Post.id!== action.id),
                UserPosts:UserPosts.filter((Post) => Post.id!== action.id)
            };
            
        case "IncrementPost":
            return{
                ...state,
                Posts:Posts.map((Post) => {
                    if (Post.id === action.id)
                        Post.upvotes++;
                }),
                UserPosts:UserPosts.map((Post) => {
                    if (Post.id === action.id)
                        Post.upvotes++;
                }),
            };
            
        case "DecrementPost":
            return{
                ...state,
                Posts:Posts.map((Post) => {
                    if (Post.id === action.id)
                        Post.upvotes--;
                }),
                UserPosts:UserPosts.map((Post) => {
                    if (Post.id === action.id)
                        Post.upvotes--;
                }),
            };

        default:
            return state;
    }
}