const car = {
            company: "Lamborghini",
            color: "Black",
            Model: "Latest"
};

// Json javascript Object Notation.

document.write(`${car.company} <br>`);
car.company="Roll Royce (RR)";
document.write(`${car.company} <br`)

document.getElementById("print").innerHTML= `${car.company} is awesome in ${car.color} color`;
