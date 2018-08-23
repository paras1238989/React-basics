class demo{
	constructor(name,age){
        this.name = name;
        this.age=age;
    }
  method1(){
      console.log("Emp.name=" +this.name)
      console.log("Emp.Age="+this.age)
  }
}

class AccEmployee extends demo{
    constructor(name,age,sapNum){
        super(name,age);
        this.sapNum=sapNum;
    }
    displayAccEmp(){
      console.log("Emp.name=" +this.name)
      console.log("Emp.Age="+this.age)
      console.log("Emp.SapNum="+this.sapNum)
      return 6;
    }
}



let obj=new AccEmployee('Paras',25,123456);
//obj.displayAccEmp();

let func = (a,b,c) => {let ret =  a+b+c; obj.displayAccEmp(); return ret;}
returned=func(1,2,3)
console.log(func(1,2,3));
//console.log(func(1,2,3))

let one = (a,b) => a+b;

sum = one(1,2)
console.log(sum)