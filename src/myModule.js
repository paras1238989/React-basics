//Any module can have one max of one export default

export class MyTest{
    add(inum1,inum2){
        return inum1+inum2;
    }
    test(){
        console.log("Test method called .....")
    }
}

export default class MyDemo{
    demo(){
        console.log("Demo method called .....")
    }    
}
