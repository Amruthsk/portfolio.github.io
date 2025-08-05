let isUserSubscribed = true;
let userHasLionsGatePlay = false;
let userHasSony = true;
if(isUserSubscribed){
    console.log("Welcome back! Here is your dashboard.");
    if(userHasLionsGatePlay){
        console.log("You have access to Lions Gate Play.");
    }else{
        console.log("You do not have access to Lions Gate Play.");
    }
    if(userHasSony){
        console.log("You have access to Sony.");
    }else{
        console.log("You do not have access to Sony.");
    }
}



if(isUserSubscribed == true && userHasLionsGatePlay == true && userHasSony == true) {
    console.log("Welcome back! Here is your dashboard.");
    console.log("You have access to Lions Gate Play and Sony.");
}

