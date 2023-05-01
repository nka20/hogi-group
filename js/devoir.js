for(let i=0;i<=100;i+=2){
    var r=5*i
    console.log("5 *",i,"=",r);
}

// impair
for(let i=1;i<=100;i++){
    let result=5*i;
    if(result % 2 !==0){
        result="5"+"*"+i+"="+result;
console.log(result);
    }
}