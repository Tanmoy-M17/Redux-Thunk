import { ADD_TODOS_FAILURE, ADD_TODOS_REQUEST, ADD_TODOS_SUCCESS, GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "./actionType"

const initialState={
    Todos:[],
    isLoading:false,
    isError:false
}

export const reducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case GET_TODOS_REQUEST:
            return{...state,
                isLoading:true,
                sError:false
            }
        
        case GET_TODOS_SUCCESS:
            return{
                ...state,
                Todos:payload,
                isLoading:false,
                isError:false
            }
        
        case GET_TODOS_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
            case ADD_TODOS_REQUEST:
            return{...state,
                isLoading:true,
                sError:false
            }
        
        case ADD_TODOS_SUCCESS:
            // const newTodo=payload
            return{
                ...state,
                isLoading:false,
                isError:false
            }
        
        case ADD_TODOS_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        
        default:
            return state
    }
}