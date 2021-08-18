import {useState} from "react";
// concept of state: app data that make change overtime
function Index () {

    const [cars, setCars] = useState([
        {
            model: "Ford",
            brand: "Mustang"
        },
        {
            model: "Honda",
            brand: "Civic"
        },
        {
            model: "Subaru",
            brand: "Impreza"
        }
    ]);
    const changeCar = (model, brand) => {
        const newCars = [...cars,
            {
                model: model,
                brand: brand
            }
        ];
        setCars(newCars);
    };
    const carList = cars.map((car, index) => <div key = {index}>{car.brand} {car.model}</div>)

    /*const [carBrand, setCarbrand] = useState("Ford");
    const [carModel, setCarModel] = useState("Mustang");
    const [carColor, setCarColor] = useState("Red");
    const [carYear, setCarYear] = useState("1964");

    const changeCar = () => {
        setCarbrand("Honda");
        setCarModel("Civic");
        setCarColor("Gold");
        setCarYear("2018");
    };

    const car = {
        brand: "Ford",
        model: "Mustang",
        color: "Red",
        year: 1964
    };
    const changeCar = () => {
        car.brand = "Honda";
        car.model = "Civic";
        car.brand = "Gold";
        car.year = 2018;
        console.log(car);
    };*/

    return (
        <div className = 'app'>
            <h3>My Cars</h3>
            <div>{carList}</div>
            <button onClick = {() => changeCar ("BMW", "323")}> Change Car</button>
        </div>
    );
};
export default Index;