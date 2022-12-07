function identifyPrime(num) {
    let count=2;
    for(let i=1;i<===num;i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==1){
        return true;
    }
        return false;
    
}
let ans= checkprime(13);
if(ans==true){
console.log("prime");
}else{
console.log("not prime");
}