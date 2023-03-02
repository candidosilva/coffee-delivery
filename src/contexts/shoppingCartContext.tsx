import { createContext, ReactNode, useReducer } from "react";
import {
  shoppingCart as state,
  shoppingCartReducer,
} from "reducers/shoppingCart/reducer";

interface ShoppingCart {
  name: string;
  image: string;
  price: number;
  qty: number;
}

interface Coffee {
  name: string;
  image: string;
  description: string;
  types: string[];
  price: number;
  qty: number;
}

interface ShoppingCartType {
  shoppingCart: ShoppingCart[];
  addItem: (item: Coffee) => void;
  removeItem: (name: string) => void;
  changeQty: (name: string, add: boolean) => void;
  updateQty: (name: string, qty: number) => void;
}

interface ShoppingCartContextProviderProps {
  children: ReactNode;
}

interface Coffee {
  name: string;
  image: string;
  description: string;
  types: string[];
  price: number;
  qty: number;
}
export const ShoppingCartContext = createContext({} as ShoppingCartType);

export const ShoppingCartDispatchContext = createContext(null);

export function ShoppingCartProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [shoppingCart, dispatch] = useReducer(shoppingCartReducer, state);

  function addItem(item: Coffee) {
    dispatch({
      type: "addItem",
      item,
    });
  }

  function removeItem(name: string) {
    dispatch({
      type: "removeItem",
      name,
    });
  }

  function changeQty(name: string, add: boolean) {
    dispatch({
      type: "changeQty",
      name,
      add,
    });
  }

  function updateQty(name: string, qty: number) {
    dispatch({
      type: "updateQty",
      name,
      qty,
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCart, addItem, removeItem, changeQty, updateQty }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
