import React, { createContext } from "react";
import all_product from "../Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextvalue = { all_product };
  return (
    <ShopContext.Provider value={contextvalue}>
      {props.chhildren}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;