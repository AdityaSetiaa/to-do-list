const input = document.getElementById("input-space");
const lists = document.getElementById("list-box");

function addtask(){
    if(input.value === ''){
        alert("Add a task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        lists.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
}
input.value ="";
saveData()

}

lists.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false)

function saveData(){
    localStorage.setItem("date, lists.innerHTML");
}
function showList(){
    lists.innerHTML=localStorage.getItem("date");
}