function explain_callback(name,age,task){
    console.log('Hello',name);
    console.log('your age',age);

    task()
    
}

function washHand(){
    console.log ('wash hand with soup');
}
function takeShware(){
    console.log('take shware');
};
   

explain_callback('Sogir Uddin',17,washHand)
explain_callback('Sogir Uddin',17,takeShware)