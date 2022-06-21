let n1=parseInt(process.argv[2])
let n2=parseInt(process.argv[3])
let min, gcd, lcm;
min=(n1<n2)? n1:n2;
for(i=1;i<=min;i++){
    if(n1%i==0 && n2%i==0){
        gcd=i
    }
}
lcm=(n1*n2)/gcd;
console.log(gcd,lcm)