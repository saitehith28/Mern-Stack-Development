var employees=[{}]
class Employee{
    employees=[{id:1,name:"Tehith",age:20,salary:100000}]
    constructor(){
        
    }
    display(){
        for(var i of this.employees){
            console.log(i);
        }
    }
    create(id,name,age,salary){
        this.id=id,
        this.name=name,
        this.age=age,
        this.salary=salary
        this.emp={id:this.id,name:this.name,age:this.age,salary:this.salary}
        this.employees.push(this.emp);
    }
    delete(id){
        var filteredEmp=this.employees.filter(function(item){
            return item.id!=id;
        })
        this.employees=[...filteredEmp];
    }
    update(id,name){
        var i;
        for(i of this.employees){
            if(id==i.id){
                i.name=name
            }
        }
    }
}
var e=new Employee();
// e.display();

while(true){
    var choice;
    choice=parseInt(prompt("\n1.Create 2.Delete 3.Update 4.Display 5.Exit \nEnter your choice"))
    if(choice==1){
        var id=parseInt(prompt("Enter id:"));
        var namee=prompt("Enter name:");
        var age=parseInt(prompt("Enter age:"));
        var salary=parseInt(prompt("Enter salary:"));
        e.create(id,namee,age,salary);
    }
    else if(choice==2){
        var id=parseInt(prompt("Enter id:"));
        e.delete(id)
    }
    else if(choice==3){
        var id=parseInt(prompt("Enter id:"));
        var newName=prompt("Enter the new name:")
        e.update(id,newName);
    }
    else if(choice==4){
        e.display();
    }
    else if(choice==5){
        exit(0);
    }
}