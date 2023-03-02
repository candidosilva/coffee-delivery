export const shoppingCart = [];

interface Coffee {
  name: string;
  image: string;
  description: string;
  types: string[];
  price: number;
  qty: number;
}

export function shoppingCartReducer(state: Coffee[], action: any): Coffee[] {
  switch (action.type) {
    case "addItem": {
      return [...state, action.item];
    }

    case "removeItem": {
      return state.filter((item) => item.name !== action.name);
    }

    case "changeQty": {
      const newState = state.map((item) => {
        if (item.name === action.name) {
          if (action.add) {
            return { ...item, qty: item.qty++ };
          } else {
            if (item.qty > 1) return { ...item, qty: item.qty-- };
            return item;
          }
        } else {
          return item;
        }
      });

      return newState;
    }

    case "updateQty": {
      const newState = state.map((item) => {
        if (item.name === action.name) {
          if (action.add) {
            item.qty++;
          } else {
            item.qty--;
          }
          return item;
        } else {
          return item;
        }
      });

      return newState;
    }

    default: {
      throw Error("Unknow action: " + action.type);
    }
  }
}
