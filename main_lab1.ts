enum Category { Business_analyst, Developer, Designer,QA, Scrum_master };



function getAllworkers(){
    let workers = [
        {name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Business_analyst, id: 1},
        {name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer, id: 2},
        {name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer, id: 3},
        {name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA, id: 4}
    ]
    return workers;
}
console.log("\nGetAllWorkers: ")
console.log(getAllworkers());

function logFirstAvailable(workers: any = getAllworkers()){
    workers = getAllworkers();
    console.log(workers.length);
    for (var worker of workers) {
        if(worker.available == true){
            console.log(worker.name + " " + worker.surname);
        }
    }
}
console.log("\nLogFirstAvailable: ")
logFirstAvailable();

function getWorkersNamesByCategory(category: Category = Category.Developer){

    let workers = getAllworkers();
    let new_workers: string[] = [];

    workers.forEach((worker) => {
        if(worker.category == category){
            new_workers.push(worker.surname)
        }
    });
    return new_workers;
}

console.log("\ngetWorkersNamesByCategory: ");
console.log(getWorkersNamesByCategory(Category.Designer));
console.log("\ngetWorkersNamesByCategory without parameters: ");
console.log(getWorkersNamesByCategory());

function logWorkersNames(array: Array<string>): void{
    console.log(array);
}

console.log("\nlogWorkersNames: ");
logWorkersNames(getWorkersNamesByCategory(Category.Designer));

function getAllWorkersNameAndSurname() {
    let workers = getAllworkers();

    workers.forEach((worker) => {
        console.log(worker.name + " " + worker.surname)
    });
}
console.log("\ngetAllWorkersNameAndSurname: ");
getAllWorkersNameAndSurname();

function getWorkerById(id: number){
        let workers = getAllworkers();
        return workers.filter(x => x.id == id)
    }

console.log("\ngetWorkerById 1: ");
console.log(getWorkerById(1));

function createCustomerID(name: string, id: number): string{
    return name.concat(id.toString());
}

console.log("\ncreateCustomerID Ann, 10: ");
console.log(createCustomerID("Ann", 10));

function createCustomer(name: string, age?: number, city?: string){
    console.log(name);
    if(age){
        console.log(age);
    }
    if(city){
        console.log(city);
    }
}
console.log("\ncreateCustomer with 1 parameter: ");
createCustomer("Anton");
console.log("\ncreateCustomer with 2 parameters: ");
createCustomer("Anton", 19);
console.log("\ncreateCustomer with 3 parameters: ");
createCustomer("Anton", 19, "Kyiv");

let myID: string = createCustomerID("Ann", 10);
console.log("\ncreateCustomer with variable: ");
console.log(myID);

function checkoutWorkers(customer: string, workerIDs: number []){

    var workers: any = [];

    console.log(customer);
    for(var number of workerIDs){
        workers.push(getWorkerById(number).filter(x => x.available == true));
    }

    return workers;
}

console.log("\ncheckoutWorkers with Ann, 1, 2, 4: ");

let myWorkers = checkoutWorkers('Ann', [1, 2, 4]);
myWorkers.forEach((worker) => {
    console.log(worker.name + " " + worker.surname)
});



