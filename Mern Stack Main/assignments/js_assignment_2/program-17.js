a=[
    {
        id:1,
        age:40
    },
    {
        id:2,
        age:50
    },
    {
        id:3,
        age:18
    },
    {
        id:4,
        age:20
    }
]
console.log(a);
for(i of a){
    if(i['age']==18){
        let index=a.indexOf(i);
        a.splice(index,1);
    }
}
console.log(a);
