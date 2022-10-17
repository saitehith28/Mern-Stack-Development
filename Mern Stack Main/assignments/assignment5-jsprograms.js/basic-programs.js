function Reverse(){
    var num=123,rev=0,rem=0;
    var temp=num;
    while(temp!=0){
        rem=temp%10;
        rev=rev*10+rem;
        temp=Math.floor(temp/10);
}
    console.log(rev);
    document.write(rev);
}

function Palindrome(){
    var num=12321,rev=0,rem=0;
    var temp=num;
    while(temp!=0){
        rem=temp%10;
        rev=rev*10+rem;
        temp=Math.floor(temp/10);
    }
    if(num==rev){
        console.log("Palindrome");
        document.write("Palindrome");
    }
    else{
        console.log("Not a Palindrome");
        document.write("Not a Palindrome");
    }
}

function SumOfDigits(){
    var num=123,sum=0,rem=0;
    var temp=num;
    while(temp!=0){
        rem=temp%10;
        sum+=rem;
        temp=Math.floor(temp/10);
    }
    console.log(sum);
    document.write(sum);
}
