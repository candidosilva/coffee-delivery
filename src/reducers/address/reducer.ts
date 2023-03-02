export const address = {
  cep: "",
  street: "",
  number: "",
  complement: "",
  neighborhood: "",
  city: "",
  state: "",
  payment: "credit",
};

interface Address {
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  payment: string;
}

export function addressReducer(state: Address, action: any) {
  switch (action.type) {
    case "updateAddress": {
      return action.address;
    }
  }
}
