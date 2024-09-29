//creates an array of strings
let Tasks = [];

//adding tasks
let addTask = (task) =>{
    if(Tasks.indexOf(task)== -1){
    Tasks.push(task);
    console.log(task + " has been added to my Tasks");
    return Tasks.length;
    }else{
        console.log(task + " has already been added to my tasks" );
    }
}
addTask("Badminton");
addTask("Football");
addTask("Tennis");
addTask("Basketball");
addTask("Cricket");
addTask("Baseball");
addTask("Hurling");
addTask("Rugby");
console.log("\n");

//All the tasks in the array
let listAllTasks = () =>{
    Tasks.forEach((element)=>{
        console.log(element);
    })
}
listAllTasks();
console.log("\n");


