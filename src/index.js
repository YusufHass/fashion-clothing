// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.scss";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import { CategoriesProvider } from "../src/contexts/categories.context";
// import { CartProvider } from "./contexts/cart.context";

// import { store } from "./store/store";
// //Provide used to wrap the redux
// import { Provider } from "react-redux";

// ReactDOM.render(
//   <React.StrictMode>
//     {/* Provider wraps and gives all access to the reducers */}
//     <Provider store={store}>
//       {/* BrowserRouter now has wrapped the entire App which 
//         means the whole application is included */}
//       <BrowserRouter>
//         {/* the CategoriesProvider is the child of the userProvider  */}
//         <CategoriesProvider>
//           {/* CartProvider is the child of the UserProvider so the parent has access */}
//           <CartProvider>
//             <App />
//           </CartProvider>
//         </CategoriesProvider>
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';
import { store } from './store/store';

import './index.scss';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
     <Provider store={store}>
      <BrowserRouter>
        <UserProvider>
          <CategoriesProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </CategoriesProvider>
        </UserProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
