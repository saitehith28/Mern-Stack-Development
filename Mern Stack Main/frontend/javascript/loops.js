// Loops
// Types of loops:
// while
// do-while
// for
// for in

// while
var i=1;
while(i<=5){
    console.log(i);
    i++;
}

// do-while
var j=1;
do{
    console.log(j);
    j++;
}while(j<=5);

// for
for(i=1;i<=5;i++){
    console.log(i);
}
for(i=5;i>=1;i--){
    console.log(i);
}

// for in
var car={
    model:"Audi",
    price:100000,
    year:2020
}
for(i in car){
    console.log(i,car[i]);
}

arr=[10,20,30,40]
for(i of arr){
    console.log(i);
}

// Sum of 1 to 10 numbers
var i=1,sum=0;
while(i<=10){
    sum+=i;
    i++;
}
console.log(sum);

// WAP to find vowel or consonant
var ch='a';
if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
console.log("Vowel");
else
console.log("Consonant");

function checkEven(){
    var output=document.getElementById("output")
    output.style.backgroundColor="red"
    var n=40;
    if(n%2==0){
        output.innerHTML="Number is Even"
    }
    else{
        output.innerHTML="Number is Odd"
    }
}
// checkEven();