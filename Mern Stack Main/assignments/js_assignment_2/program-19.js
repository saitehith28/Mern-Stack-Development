var n=parseInt(prompt("Enter the size of array:"));
var arr=[]
for(let i=0;i<n;i++){
    arr[i]=parseInt(prompt(`Enter element ${i+1}`));
}
var uniqueArray=[]
var index=[]
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            index[j]=-1;
        }
    }
}
console.log(arr);
var j=-1;
for(let i=0;i<arr.length;i++){
    if(index[i]!==-1){
        j++;
        uniqueArray[j]=arr[i];
    }
}
console.log(uniqueArray);