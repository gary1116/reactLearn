

export const fetchPostRequest=()=>({
    type:"FETCH_POSTS_REQUEST"
})

export const fetchPostSuccess=(post)=>({
    type:"FETCH_POSTS_SUCCESS",
    payload:post,
});

export const fetchPostFailure=(error)=>({
    type:"FETCH_POSTS_FAILURE",
    payload:error,
});


export const fetchPosts=()=> async(dispatch)=>{

    dispatch(fetchPostRequest())

    try{
        const response= await fetch('https://jsonplaceholder.typicode.com/posts')
        const data=await response.json();
        dispatch(fetchPostSuccess(data));
    }catch (error){
        dispatch(fetchPostFailure(error.message));
    }

}