import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import { ProductProvider } from "../src/contexts/products.context";
import { CartProvider } from "./contexts/cart.context";
ReactDOM.render(
  <React.StrictMode>
    {/* BrowserRouter now has wrapped the entire App which 
        means the whole application is included */}
    <BrowserRouter>
      {/* now the UserProvider has the access to the App componetn and App is the parent of the rest of component */}
      <UserProvider>
        {/* the product provider is the child of the userProvider  */}
        <ProductProvider>
          {/* CartProvider is the child of the UserProvider so the parent has access */}
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
