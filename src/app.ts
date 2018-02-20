interface ICar {
    describe: Function;
}

class Car implements ICar {
    constructor(private color: string, private horsepower: number, private brand: string) {
    }

    public describe() {
        return 'My car is a ' + this.color + ' ' + this.brand + ' that has ' + this.horsepower + ' horsepower.';
    }

}

const davidsCar: ICar = new Car('black', 300, 'bmw');



const contentDiv = document.getElementById("content");
if (contentDiv !== null) {
    contentDiv.innerHTML = davidsCar.describe();
}


