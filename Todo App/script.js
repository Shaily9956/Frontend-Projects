const todoinput=document.getElementById("todo-input");
const add=document.getElementById("addtobtn");
const list=document.getElementById("todolist");


add.addEventListener('click',addTask);

function addTask(){
    const todotext=todoinput.value.trim();
    if(todotext!==''){
        const li=document.createElement("li");
        li.textContent=todotext;
        list.appendChild(li);
        todoinput.value='';
        


    }
}