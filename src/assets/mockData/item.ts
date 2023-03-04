import happyMeal from "../happy_meal.png";

export interface ItemType {
  id: string;
  img: string;
  name: string;
  price: number;
}

export const mockCategoryData: ItemType[] = [
  {
    id: "1",
    img: happyMeal.src,
    name: "Happy Meal",
    price: 3.4,
  },
  {
    id: "2",
    img: happyMeal.src,
    name: "Combo Menu",
    price: 3.4,
  },
  {
    id: "3",
    img: happyMeal.src,
    name: "Burgers",
    price: 3.4,
  },
  {
    id: "4",
    img: happyMeal.src,
    name: "Chicken",
    price: 3.4,
  },
];

export const mockItemData: ItemType[] = [
  {
    id: "1",
    img: happyMeal.src,
    name: "Big Mac",
    price: 3.39,
  },
  {
    id: "2",
    img: happyMeal.src,
    name: "Quarter Pounder",
    price: 5.29,
  },
  {
    id: "3",
    img: happyMeal.src,
    name: "Cheese Burger",
    price: 1.99,
  },
  {
    id: "4",
    img: happyMeal.src,
    name: "Chicken Burger",
    price: 1.29,
  },
  {
    id: "5",
    img: happyMeal.src,
    name: "Kids Menu",
    price: 2.29,
  },
];
