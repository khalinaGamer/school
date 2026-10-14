let car = {
    brand: "BMW",
    model: "M3",
    price: 8000000,
    
    showDetails: function() {
        console.log(this.brand + " " + this.model + " " + this.price);
    }
}

car.showDetails(); 