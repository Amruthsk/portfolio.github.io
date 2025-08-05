// ifelse
let userSubscription = "premium";

if(userSubscription == "unsubscribed") {
    console.log("Show pricing page. Please subscribe to our service.");
}else if (userSubscription == "subscribed") {
    console.log("Show dashboard. Welcome back!");
}else if (userSubscription == "trial") {
    console.log("Show trial page. Please subscribe to our service.");
}else if (userSubscription == "premium") {
    console.log("Show all the content.");
}else if (userSubscription == "cancelled") {
    console.log("Show cancellation page. Please resubscribe to our service.");
} else {
    console.log("Invalid subscription status.");
}

console.log("End of program.");