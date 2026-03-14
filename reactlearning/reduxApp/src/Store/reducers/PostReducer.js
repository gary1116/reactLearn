


const initialState={
        post:[],
        loading:false,
        error:null
}

export const PostReducer=(state=initialState,action)=>{

    switch(action.type){
        case 'FETCH_POSTS_REQUEST':
            return {
                ...state,
                loading:true,

            }

        case 'FETCH_POSTS_SUCCESS':
            return {
                ...state,
                loading:false,
                post:action.payload
                
            }

        case 'FETCH_POSTS_FAILURE':
            return {
                ...state,
                loading:true,
                error:action.payload
            }

        default:
            return state;
    }
}