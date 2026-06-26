// module pattern
// module pattern is a desgine pattern that is used to create private variable and function

// const Bank = (function () {
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


// observerPattern

class YoutubeChannel{
    constructor(name){
        this.name = name;
        this.subscriber= []
    }
    subscribe(user){
        this.subscriber.push(user);
        user.update (`${user.name}, You subscribed The Channel`)
    }
    unsubscribe(user){
        this.subscriber = this.subscriber.filter(sub => sub !==user);
        user.update (`${user.name}, You Unsubscribed The Channel`)
    }
    notify(message){
        this.subscriber.forEach((sub)=> sub.update(message))
    }
}

class User {
    constructor(name){
        this.name = name
    }
    update(data){
        console.log(`${this.name} , ${data}`);
        

    }
}

let akashChoudhary = new YoutubeChannel("Akashhh")
let user1 = new User("Akash")
let user2 = new User("Rishabh")
// akashChoudhary.subscribe(user1);
akashChoudhary.subscribe(user1)
akashChoudhary.subscribe(user2)

akashChoudhary.notify("New Video is live on the channel")
