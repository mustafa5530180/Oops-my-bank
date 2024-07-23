#! /usr/bin/env node
interface IBankAccount {
    credit(amount: number): void;
    debit(amount: number): void;
}

class BankAccount implements IBankAccount {
    accountBalance: number;
    constructor(accountBalance: number) {
        this.accountBalance = accountBalance;
    }
    
    public credit(amount: number) {
        if (amount > 0) {
            this.accountBalance += amount;
            console.log("Credits Successfully get into the new account and your Balance is: " + this.accountBalance);
        } else {
            console.log("Credits Unsuccessful");
        }
    }

    public debit(amount: number) {
        if (amount > 0 && amount <= this.accountBalance) {
            this.accountBalance -= amount;
            console.log("Debit Successfully, new account Balance: " + this.accountBalance);
        } else {
            console.log("Debit Unsuccessful");
        }
    }
}

class Customer {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    mobileNumber: number;
    bankAccount: BankAccount;

    constructor(firstName: string, lastName: string, age: number, gender: string, mobileNumber: number, bankAccount: BankAccount) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.mobileNumber = mobileNumber;
        this.bankAccount = bankAccount;
    }

    public display() {
        console.log("Name: " + this.firstName + " " + this.lastName);
        console.log("Age: " + this.age);
        console.log("Gender: " + this.gender);
        console.log("Mobile Number: " + this.mobileNumber);
        console.log("Amount In Bank: " + this.bankAccount.accountBalance);
        console.log();
    }
}

const a1 = new BankAccount(800);
const c1 = new Customer("Fizra", "Amir", 20, "female", 3183919074, a1);
c1.display();
c1.bankAccount.debit(500);
console.log();

const a2 = new BankAccount(500);
const c2 = new Customer("Hina", "Husain", 21, "female", 3183919074, a2);
c2.display();
c2.bankAccount.debit(200);
console.log();


// interface ibankaccount{
//     credit(amount:number):void;
//     debit (amount:number):void;
// }
// class BankAccount implements ibankaccount{
//     accountbalance:number;
//     constructor(accountbalance:number){
//         this.accountbalance=accountbalance
//     }
// public credit(amount:number){
//     if(amount>0){
//         this.accountbalance+=amount
//         console.log("Credits Successfully get into  New account and your Balance is :"+this.accountbalance);
        
//     }else{
//         console.log("Credits UnSuccessfull");
        
//     }
    
//     }

// public debit(amount: number) {
// if (amount>0 && amount<this.accountbalance){
//     this.accountbalance-=amount
//     console.log("Debit Successfully Share  in new account Balance:"+this.accountbalance);

    
// }else{
//     console.log(("Debit Successfully "));
    
// }
    
// }
// }
// class Customer{
//     person:{
//         firstName:string;
//         lastName:string;
//         age:number;
//         gender:string;
//         mobile_number:number;
//         bankaccount:BankAccount;

//         constructor(person:{firstName:string, lastName:string,age:number,gender:string,mobile_number:number,bankaccount:BankAccount})
//         this.person=person;
//          this.age=age;
//          this.gender=gender;
//         this.mobile_number=mobile_number;
//         this.bankaccount=BankAccount;

//     };
//     public display(){
//         console.log("Name:"+this.person.firstName+""+this.person.lastName);
//         console.log("Age:"+this.age);
//         console.log("Gender:"+this.gender);
//         console.log("Mobile Number :"+this.mobile_number);
//         console.log("Amount In Bank:"+ this.bankaccount.accountbalance);
//         console.log();
        
        
        
        
        
        
//     }
    
// }
// const a1=new BankAccount(800)
// const c1=new Customer({firstName:"Fizra",lastName:"Amir",},20,"female",3183919074,a1)
// c1.display()
// c1.banlaccount.debit(500)
// console.log();

// const a2=new BankAccount(500)
// const c2=new Customer({firstName:"Hina",lastName:"Husain",},21,"female",3183919074,a2)
// c1.display()
// c1.banlaccount.debit(200)
// console.log();