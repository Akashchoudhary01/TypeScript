const Bank = (function () {
//     let bankBalance = 10000;

//     function checkBalance() {
//         console.log("Balance:", bankBalance);
//     }

//     function deposit(val) {
//         bankBalance += val;
//         console.log("New balance after deposit:", bankBalance);
//     }

//     function withdraw(val) {
//         if (bankBalance >= val) {
//             bankBalance -= val;
//             console.log("New balance after withdrawal:", bankBalance);
//         } else {
//             console.log("Insufficient balance");
//         }
//     }

//     return {
//        add: deposit,
//       withdrow:  withdraw,
//       check:  checkBalance
//     };
// })();

// Bank.withdrow(9000);
// Bank.check();
// Bank.add(5000);
// Bank.check();

// // factory function patter

// const createProduct = function (name , price){
//     let stock = 100;

//     return{
//         checkStock(){
//             console.log(stock);
            
//         },
//         refil(qty){
//             stock += qty;
//         },
//         buy(qty){
//             if(stock >= qty){
//                   stock -= qty
//                   console.log(`thanks for purchasing ${qty} item`);
                  
//             }else{
//                 console.log("sorry currently we don't have that much in stock ");
                
//             }
//         }
//     }

// }

// const iphone = createProduct("iphone" , 60000);
// iphone.refil(100)
// iphone.checkStock();
// iphone.buy(200)
// iphone.checkStock();
