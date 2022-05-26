var business = 450;
var minister = 650;
var sochib = 550;


/** 
if(business>minister){
    if(business>sochib){
        console.log("Business man is bigger");
    }
    else{
      console.log("Sochib is bigger");    
    }
}
else{
    if(minister>sochib){
        console.log("Minister is bigger")
    }
    else{
        console.log('Sochib is bigger');
    }
}
*/
var max =Math.max(business,minister,sochib);
console.log(max);