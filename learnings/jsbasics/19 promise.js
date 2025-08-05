// /ecommerce website
// const cart = ['shirt','pant','shoes'];

// //cb
// function(orderId){
//     proceedToPayment(orderid);
// }

// //blindly trusting createOrderapi = cb passed  --uncertain only createOrder api total control of cb
// createOrder(cart,function(orderId){
//     proceedToPayment(orderid);
// });

// // control with us 1)create order
// const promise = createOrder(cart);
// //{data: undefined}--5sec-->{data:order ID/details}


// //{data:order ID/details} data filled automatically calls cb
// //attach callback with promise object  call cb whenever promis is with date
// promise.then(function(orderId){
//     proceedToPayment(orderid);
// });

// //{data: undefined}---->{data:order ID}

// const GITHUB_API = "https://api.github.com/users/akshaymarch7";

// const user = fetch(GITHUB_API);
// //promise object - user data (ud---> filled)

// console.log(user);

// //(data filled) ---> call cb once filled data in cb
// //attach promise object with then method
// user.then(function (data) {
//   console.log("data", data);
// }   );



// //attach callback with promise object  call cb whenever promise is with date
// api.createOrder(cart, function (orderId) {

//   api.proceedToPayment(orderId,function (paymentInfo) {

//     api.orderSummary(paymentInfo,function () {

//       api.updateWallet();
//     });

//    });

// });


// const promise = createOrder(cart); //{data: undefined}---->{data:order ID}

// promise.then(function(orderId){
//     proceedToPayment(orderid);
// });

// // same as
// createOrder(cart) //{data: undefined}---->{data:order ID}
// .then(function (orderId) {
// proceedToPayment(orderid); 
// })

// //piping - promise chain - vertical coding- always use  important return

// createOrder(cart) //{data: undefined}---->{data:order ID}
//   .then(function (orderId) {
//     return proceedToPayment(orderid); 
//   })
//   .then(function (paymentInfo) { //{data: paymentinfo}---->{data: paymentinfo}
//   })
//     return orderSummary(paymentInfo); 
//   .then(function (paymentInfo) {
//     return updateWallet(paymentInfo  ); //{data: paymentinfo}---->{data: paymentinfo}
//   });


// // similar using arrow function
// createOrder(cart)
//   .then((orderId) => proceedToPayment(orderid)) //{data: undefined}---->{data:order ID}
//   .then((paymentInfo) => orderSummary(paymentInfo)) //{data: undefined}---->{data:order ID}
//   .then((paymentInfo) => updateWallet(paymentInfo));//{data: undefined}---->{data:order ID}
