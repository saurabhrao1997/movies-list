
import { callApi } from "../actions/action";

const initialState ={
    movies:[],
       
}


 const apiReducer =(state=initialState,actions)=>{
           switch(actions.type){
            case "CALL_API":
                return {...state,movies:actions.payload};
            case "FITER_API":
                 return {...state,movies:actions.payload};    
            
            default:
                return state;
            }
 
    



    
}

export default apiReducer;