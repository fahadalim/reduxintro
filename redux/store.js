import {ADD_TODO,DELETE_TODO} from "./action";

export const reducer = (store,action)=>{
   switch(action.type){
    case ADD_TODO:
        return {...store,todos:[...store.todos,action.payload]};

        case DELETE_TODO:
            return {...store,todos:[...store.todos.filter((e,i)=>{
                return e.title !== action.payload.title;
            })]}
            default:
                return store;
   }
   


}