//callback - to execute after 5 sec

console.log('Javascript');

//1st function 2nd settimeout
//callback- function to setTimout
setTimeout(function () {
  console.log("javascript is easy");
}, 4000);


//ecommerce website
const cart = ['shirt','pant','shoes'];

// working 1stcreate order 2nd payment 3 order summary 4 update wallet

//2 backend api create order, async operation api payment
//call back hell - grow horizontally pyramid of doom
api.createOrder(cart, function () {

  api.proceedToPayment(function () {

    api.orderSummary(function () {
        
        api.updateWallet();
    });

   });
});

// order summary after payment cb function
function () {
  api.orderSummary();
}

//update wallet
function () {
  api.updateWallet();
}


// we take cb and give it to creatorder api expecting createordert to call cb
//gave control to api blindly trusting cb - can never be called, called twice
//cb into another function we give our written cb to get controlled by another code which we dont know

// Inversion of control

api.createOrder(cart, function () {

  api.proceedToPayment();

});
