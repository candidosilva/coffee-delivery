import { createContext, ReactNode, useReducer } from "react";
import { addressReducer, address as state } from "reducers/address/reducer";

interface AddressProviderProps {
  children: ReactNode;
}

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

interface AddressContextType {
  address: Address;
  updateAddress: (address: Address) => void;
}

export const AddressContext = createContext({} as AddressContextType);

export function AddressProvider({ children }: AddressProviderProps) {
  const [address, dispatch] = useReducer(addressReducer, state);

  function updateAddress(address: Address) {
    dispatch({
      type: "updateAddress",
      address,
    });
  }

  return (
    <AddressContext.Provider value={{ address, updateAddress }}>
      {children}
    </AddressContext.Provider>
  );
}
