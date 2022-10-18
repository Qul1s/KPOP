enum Category { Business_analyst, Developer, Designer,QA, Scrum_master, default };


interface PrizeLogger
{
    str:string;
}

interface Workers{
    id:number;
    Name:string;
    surname:string;
    available:boolean;
    salary:number;
    category:Category;
    markPrize?:PrizeLogger;
}


function getAllworkers()
{
    let workers:Workers[] = [
        {id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Business_analyst},
        {id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Scrum_master},
        {id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer},
        {id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer}
    ]
    return workers;
}
console.log("\nGetAllWorkers: ")
console.log(getAllworkers());


function getWorkerByID (id:number):Workers{

    let worker:Workers={

        id: getAllworkers().find(value=>value.id==id)?.id || 0,
        Name:(getAllworkers().find(value=>value.id==id)?.Name) || 'Undef',
        surname: getAllworkers().find(value=>value.id==id)?.surname||'Undef',
        available: getAllworkers().find(value=>value.id==id)?.available || false,
        salary: getAllworkers().find(value=>value.id==id)?.salary || 0,
        category: getAllworkers().find(value=>value.id==id)?.category || Category.default
    }
    return worker
}

function printWorkers(worker:Workers){
    if(worker.id==0){
        console.log('Worker does not exist')
    }
    else{
        console.log(worker.Name+' '+worker.surname+' Salary:'+worker.salary)
    }
}

let logPrize:PrizeLogger
function prizeIn(text:string) {
    logPrize={str: text}
    console.log(logPrize.str)
}

prizeIn('Worker Anton')


interface Person
{
    name: string;
    email: string;
}
interface Author extends Person{
    numBooksPublished: number;
}
interface Librarian extends Person{
    department: string
    assistCustomer?(custName:string):void
}


let favoriteAuthor:Author= {name:'Dmytro',email: 'dmytro_123@gmail.com',numBooksPublished:27}
// let favoriteLibrarian:Librarian= {name:'Dmytro',email: 'dmytro_123@gmail.com', department:"Main department"}

console.log(favoriteAuthor.name)

class UniversityLibrarian implements Librarian{
    name: string;
    email:string;
    department:string;
    assistCustomer(custName:string){
        console.log(`${this.name} is assisting ${custName}`)
    }
}
let favouriteLibrarian:Librarian=new UniversityLibrarian()
let example=favouriteLibrarian.name='Jimmy'

console.log(example)

favouriteLibrarian.assistCustomer('Walter')

abstract class ReferenceItem{
    /*title:string;
    year:number
    constructor(newTitle:string,newYear:number){
         console.log('Creating a new ReferenceItem')
         this.title=newTitle
         this.year=newYear
    }*/
    constructor(public title:string,protected year:number){}
    private _publisher:string

    printItem(){
        console.log(`${this.title} from ${ReferenceItem.department} was published in ${this.year}`)
    }

    public get publisher(){
        return this._publisher.toUpperCase()
    }
    public set publisher(newPublisher:string){
        this._publisher= newPublisher
    }
    static department:string='dep'

    abstract printCitation(): void;
}


//let ref= new ReferenceItem('Title',2022)
//ref.printItem()
//ref.publisher="anton"
//console.log(ref.publisher)

class Encyclopedia extends ReferenceItem{
    constructor(title:string, year:number,public edition:number){
        super(title,year)
    }
    printItem(){
        super.printItem()
        console.log(`Edition: ${this.edition}(${this.year})`)
    }

    printCitation():void{
        console.log(`${this.title} - ${this.year}`)
    }
}
let refBook= new Encyclopedia('Title',2022,12)
refBook.printItem()
refBook.printCitation()



