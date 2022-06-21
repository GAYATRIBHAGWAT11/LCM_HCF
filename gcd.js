let num1=parseInt(process.argv[2])
let num2=parseInt(process.argv[3]);
let gcd;
let count=1
while(count<=num1 && count<=num2){
    if(num1%count==0 && num2%count==0){
        gcd=count;
    }
    count++
}
console.log(gcd)