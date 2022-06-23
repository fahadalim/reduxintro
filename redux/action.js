export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";


export const addTodo = (title,status)=>{
    return{
        type: ADD_TODO,
        payload:{
            title:title,
            status:false,
        },
    }
}

export const deleteTodo = (title,status)=>{
    return{
        type:DELETE_TODO,
        payload:{
            title:title,
            status:false,
        },
    }
}