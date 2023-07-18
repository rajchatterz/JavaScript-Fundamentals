// function fixCartBug(cart) {
//     for (let i = 0; i < cart.length; i++) {
//       cart[i] *= 2; 
//     }
//     return cart;
//   }
//   let cart = [2, 3, 1, 4, 5];
//     cart = fixCartBug(cart);
//     console.log(cart); 

// const cart = [
//     { unitPrice: 10, quantity: 2 },
//     { unitPrice: 5, quantity: 4 },
//     { unitPrice: 2, quantity: 8 }
//   ];
  
//   const calculateTotalCost = (cart) => {
//   let totalCost = 0;
//   for (let i = 0; i < cart.length; i++) {
//     totalCost += cart[i].unitPrice * cart[i].quantity;
//   }
//   return totalCost;
// };
arr = [12,223,1,3131,4,142,1,131441325,5,235,1,1,441,5,2,253,3535,2]
let newSet = new Set(arr)
newSet.forEach(e=>console.log(e))