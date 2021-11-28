//To Add UserPosts in the Redux Store
export const DumpUserPosts = (userposts) => {
    return{
        type:"DumpUserPosts",
        payload:userposts
    }
};

//To Dump All The NewsFeed Posts in the Redux Store
export const DumpPosts = (posts) => {
    return{
        type:"DumpPosts",
        payload:posts,
    }
};

//To Add New NewsFeed Post in the Redux Store
export const AddPost = (post) => {
    return{
        type:"AddPost",
        payload:post,
    }
};

//To Add User Post in the Redux Store
export const AddUserPost = (userpost) => {
    return{
        type:"AddUserPost",
        payload:userpost,
    }
};

//To Delete User Post in the Redux Store
export const DeleteUserPost = (userpostid) => {
    return{
        type:"DeleteUserPost",
        id:userpostid,
    }
};

//To Delete Post in the Redux Store
export const DeletePost = (postid) => {
    return{
        type:"DeletePost",
        id:postid,
    }
};

//To Increment Upvotes of Post in the Redux Store
export const IncrementUpvote = (postid) =>{
    return {
        type:"IncrementPost",
        id:postid,
    }
}

//To Decrement Upvotes of Post in the Redux Store
export const IncrementUpvote = (postid) =>{
    return {
        type:"IncDecrementPost",
        id:postid,
    }
}