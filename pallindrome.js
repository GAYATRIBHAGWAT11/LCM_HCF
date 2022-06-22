// Palindrome number in c: A palindrome number is a number that is same after reverse. For example 121, 34543, 343, 131, 48984 are the palindrome numbers.

let number=121;
let rem;
let sum=0
let pallindrome=number;
while(number>0){
     rem=Math.floor(number%10)
    sum=sum*10+rem;
    number=Math.floor(number/10);
   
}
if(pallindrome==sum){
    console.log("number is pallindrome")
}else{
    console.log("number is not pallindrom")
}

