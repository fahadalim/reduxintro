import { legacy_createStore as createStore } from "redux";
import { reducer } from "./redux/store";
import { addTodo,deleteTodo } from "./redux/action";

const initState = {
    todos:[],
};

const store = createStore(reducer,initState);

document.getElementById("btn").addEventListener("click",()=>{
    document.getElementById("appendDiv").innerHTML = null;

    let todo = document.getElementById("todoInput").ariaValueMax;
    store.dispatch(addTodo(todo,false));

    let appendDiv = document.getElementById("appendDiv");
    let data = store.getState().todos;

    showData(data)
    
})

const showData = (data)=>{
    data.map((e,i)=>{
        const div = document.createElement("div");
        div.id = "todocard";

        const inp = document.createElement("input");
        inp.setAttribute("type","submit");
        inp.value="DELETE"

        inp.addEventListener("click",()=>{
            store.dispatch(deleteTodo(e.title,true));

            document.getElementById("appendDiv").innerHTML=null;

            let newData = store.getState().todos;
            showData(newData);
        });
        const text = document.createElement("p");
        text.id = "cardText";

        text.innerHTML = e.title;

        div.append(inp,text)
        appendDiv.append(div)
    })
}