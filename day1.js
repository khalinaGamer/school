function calculateFinalPrice(price, quantity, discount) {
   let totalPrice = price * quantity;
   let finalPrice = totalPrice - discount;
    if (finalPrice >= 1000) {
        console.log("Eligible for free shipping");
    } else {
        console.log("shipping charges apply");
    }
    return finalPrice;
}

let finalPrice = calculateFinalPrice (600, 2, 300);
console.log(finalPrice);