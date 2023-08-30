const input = document.querySelector(".todo-input");
const btn = document.querySelector(".btn-to");
const list = document.querySelector(".list");
let data;
if(localStorage.getItem("list")){
    data = localStorage.getItem("list").split(',')
}else{
    data = ["go to the gym","learn about islam"];
}
for(let i in data){
            text=data[i];
            let task = document.createElement("li");
            task.classList.add("mt-10", "bg-blue", "d-block", "rad-6", "p-10", "w-90","d-flex" ,"p-relative");
            task.textContent = text;
    
            let iconElement = document.createElement("i");
            iconElement.classList.add("fa-sharp", "fa-solid", "fa-circle-xmark", "c-red", "remove");
            // Append the <i> element to the <li> element
            task.appendChild(iconElement);
            // Append the task element in the list
            list.appendChild(task);
}
btn.addEventListener("click",(event)=>{
        add()
})
input.addEventListener("keypress",(event)=>{
    if (event.key === "Enter"){
        add()
    }
})
function add()  {
        let task = document.createElement("li");
        task.classList.add("mt-10", "bg-blue", "d-block", "rad-6", "p-10", "w-90","d-flex" ,"p-relative");
        task.textContent = input.value;

        let iconElement = document.createElement("i");
        iconElement.classList.add("fa-sharp", "fa-solid", "fa-circle-xmark", "c-red", "remove");
        // Append the <i> element to the <li> element
        task.appendChild(iconElement);
        // Append the task element in the list
        list.appendChild(task);
        data.push(input.value)
        input.value = "";
        localStorage.setItem(`list`, data);
}

list.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove")) {
        localStorage.clear;
        data.splice(String(data.indexOf(event.target.parentElement.textContent)),1)
        localStorage.setItem("list",data)
        event.target.parentElement.remove();
    }

});
list.addEventListener("click", (event) => {
    event.target.classList.toggle("done")
});

