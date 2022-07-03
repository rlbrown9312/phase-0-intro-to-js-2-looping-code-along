 //const names = ["Guadalupe", "Ollie", "Aki"];
 //const event = "Christmas"; 

 function writeCards(names, event) {
     let messages = [] 
     for (let i = 0; i < names.length; i ++) {
        let newMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        messages.push(newMessage)   
     }

     return messages
 }


// // function countDown(startingNumber) {
// //     while (startingNumber >= 0); {
// //         console.log(startingNumber)
// //         startingNumber--;
// //     }
// //     console.log(startingNumber)
         
// }