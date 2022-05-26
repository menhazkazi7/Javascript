function addNums(num1,num2){
    var sum = 0;
    for( let i = 0; i<arguments.length ; i++){
        const num = arguments[i];
        sum = sum + num;
    
}
return sum;

}
var result = addNums(3,5,15,29,40,52);
console.log(result)
