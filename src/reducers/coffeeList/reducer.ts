export interface Coffee {
  name: string;
  image: string;
  description: string;
  types: string[];
  price: number;
  qty: number;
}

import image from "assets/coffee/Image.svg";
import image1 from "assets/coffee/Image-1.svg";
import image2 from "assets/coffee/Image-2.svg";
import image3 from "assets/coffee/Image-3.svg";
import image4 from "assets/coffee/Image-4.svg";
import image5 from "assets/coffee/Image-5.svg";
import image6 from "assets/coffee/Image-6.svg";
import image7 from "assets/coffee/Image-7.svg";
import image8 from "assets/coffee/Image-8.svg";
import image9 from "assets/coffee/Image-9.svg";
import image10 from "assets/coffee/Image-10.svg";
import image11 from "assets/coffee/Image-11.svg";
import image12 from "assets/coffee/Image-12.svg";
import image13 from "assets/coffee/Image-13.svg";

export const coffees = [
  {
    name: "Traditional Espresso",
    image: image,
    description: "Traditional coffee made with hot water and ground beans",
    types: ["TRADITIONAL"],
    price: 9.9,
    qty: 1,
  },
  {
    name: "American Express",
    image: image1,
    description: "Diluted espresso, less intense than the traditional one",
    types: ["TRADITIONAL"],
    price: 8.85,
    qty: 1,
  },
  {
    name: "Creamy Espresso",
    image: image2,
    description: "Traditional espresso with creamy foam",
    types: ["TRADITIONAL"],
    price: 10.25,
    qty: 1,
  },
  {
    name: "Iced Espresso",
    image: image3,
    description: "Drink prepared with espresso coffee and ice cubes",
    types: ["TRADITIONAL", "ICED"],
    price: 7.75,
    qty: 1,
  },
  {
    name: "Coffee with milk",
    image: image4,
    description: "Half and half traditional espresso with steamed milk",
    types: ["TRADITIONAL", "WITH MILK"],
    price: 9.45,
    qty: 1,
  },
  {
    name: "Latte",
    image: image5,
    description: "A shot of espresso with twice as much milk and creamy foam",
    types: ["TRADITIONAL", "WITH MILK"],
    price: 8.65,
    qty: 1,
  },
  {
    name: "Cappuccino",
    image: image6,
    description:
      "Cinnamon drink made from equal doses of coffee, milk and foam",
    types: ["TRADITIONAL", "WITH MILK"],
    price: 10.15,
    qty: 1,
  },
  {
    name: "Macchiato",
    image: image7,
    description: "Espresso coffee mixed with a little hot milk and foam",
    types: ["TRADITIONAL", "WITH MILK"],
    price: 7.55,
    qty: 1,
  },
  {
    name: "Moccacino",
    image: image8,
    description: "Espresso coffee with chocolate sauce, a little milk and foam",
    types: ["TRADITIONAL", "WITH MILK"],
    price: 9.75,
    qty: 1,
  },
  {
    name: "Hot chocolate",
    image: image9,
    description: "Drink made with chocolate dissolved in hot milk and coffee",
    types: ["SPECIAL", "WITH MILK"],
    price: 8.35,
    qty: 1,
  },
  {
    name: "Cuban",
    image: image10,
    description: "Iced espresso drink with rum, cream and mint",
    types: ["SPECIAL", "ALCOHOL", "ICED"],
    price: 10.65,
    qty: 1,
  },
  {
    name: "Hawaiian",
    image: image11,
    description: "Sweet drink prepared with coffee and coconut milk",
    types: ["SPECIAL"],
    price: 7.25,
    qty: 1,
  },
  {
    name: "Arabic",
    image: image12,
    description: "Drink prepared with Arabic coffee beans and spices",
    types: ["SPECIAL"],
    price: 9.95,
    qty: 1,
  },
  {
    name: "Irish",
    image: image13,
    description:
      "Drink based on coffee, Irish whiskey, sugar and whipped cream",
    types: ["SPECIAL", "ALCOHOL"],
    price: 8.15,
    qty: 1,
  },
];

export function coffeesReducer(state: Coffee[], action: any): Coffee[] {
  switch (action.type) {
    case "addItemCount": {
      const coffeesArray = state.map((coffee) => {
        if (coffee.name === action.name) {
          return { ...coffee, qty: coffee.qty + 1 };
        } else {
          return coffee;
        }
      });
      return coffeesArray;
    }

    case "subItemCount": {
      const coffeesArray = state.map((coffee) => {
        if (coffee.name === action.name) {
          if (coffee.qty > 1) {
            return { ...coffee, qty: coffee.qty-- };
          } else {
            return coffee;
          }
        } else {
          return coffee;
        }
      });
      return coffeesArray;
    }

    default: {
      throw Error("Unknow action: " + action.type);
    }
  }
}
