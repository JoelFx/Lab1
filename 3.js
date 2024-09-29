//creates an array of strings
let Tasks = [];

//adding tasks
let addTask = (task) =>{
    if(Tasks.indexOf(task)== -1){
    Tasks.push(task);
    console.log(task + "has been added to my Tasks");
    return Tasks.length
    }
}