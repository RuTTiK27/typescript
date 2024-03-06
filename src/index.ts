let age: number = 20;

//array example
let numbers:number[] = [10,20,30];

//touple
let arr:[number,string] = [1,'Rutvik'];
arr.push(1);

//enums (use PascalCase)
const enum Size {Small = 1,Medium = 2,Large=3}
let mySize:Size = Size.Medium;
console.log(mySize);

//function
function calculateTax(income:number,taxYear:number = 2022):number {
    
    if (taxYear < 2022) {
        return income*1.2
    }else{
        return income*1.3
    }
}

calculateTax(10_000)

//Objects
let employee:{ 
    readonly id:number, 
    name:string,
    retire: (date: Date) => void 
} 
= 
{
    id:1,
    name:'Rutvik',
    retire:(date:Date)=>{
        console.log(date)
    }
}


//type alias - better way to use objects
type Employee = {
    readonly id:number, 
    name:string,
    retire: (date: Date) => void
}

let emp : Employee = {
    id:1,
    name:'Rutvik',
    retire: (date:Date)=>{
        console.log(date)
    }
}
//union types
function kgToLbs(weight:number|string):number {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight)*2.2;
}
kgToLbs(10);
kgToLbs('10');

//intersection types
type Draggable = {
    drag:()=> void 
}

type Resizable = {
    resize:()=> void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag:()=>{},
    resize:()=>{}
}
//Literal Types (exact,specific)
type Quantity = 50 | 100;
let qty:Quantity = 100;

//Nullable types
function greet(name:string | null| undefined) {
    if(name)
        console.log(name.toLocaleUpperCase())
    else
        console.log("Hello User")
}
greet(null)

//Optional Chaining
