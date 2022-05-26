function evenify_all(nums){

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
   
    if(num %2 == 0){
        console.log(num,'is an even num');
    }
    else{
        console.log(num,'is an odd num');
    }
 }
}

nums = [5,10,15,20,30,45];
evenify_all(nums);



friends_age = [13,20,25,27,23,21];
evenify_all(friends_age);


