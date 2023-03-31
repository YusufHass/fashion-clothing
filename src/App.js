import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
//used to useDispatch hook is used to dispatch allowing us intract with
//redux-store


import { useDispatch } from "react-redux";

import { useEffect } from "react";
import {
  onAuthStateChangedListner,
  signOutUser,
  createUserDocumentFromAuth,
  getCurrentUser,
} from "./utils/firebase/firebase.utils";

import { checkUserSession, setCurrentUser } from "./store/user/user.action";

const ShowItems = () => {
  return (
    <>
      <h1>Welcome to Fashion Clothing Store</h1>
      <h1 style={{ color: "red" }}>Enjoy your selections</h1>
    </>
  );
};

const App = () => {
  //
  const dispatch = useDispatch();

  /*

The follwing useEffect is coming from the userContext.js file because we no longer use
userProvider in the index.js and replaced it into the redux. 
userContext was the top level and the first one to execute in the index.js and here putting 
it in the App.js makes it execute first
*/
  // useEffect(() => {
    //unsubscribe makes disble the onAuthStateChangedListner when the state is unmount
    //it listens everytime a user changes
    // const unsubscribe = onAuthStateChangedListner((user) => {
      // console.log(user)
      //if the user is new then create new user snapshot otherwise use the currentUser
      // if (user) {
      //   createUserDocumentFromAuth(user);
      // }
      /**
       this dispatch works similar to the useContext but unlike useContext
       this redux dispatch dispatches to the root-reducer and then the root-reducer
       dispatches to every single reducers functions

       we have only one dispatch in this app
       */
    //   dispatch(setCurrentUser(user));
    // });
    // {console.log("Here is yesuf")}
    // return unsubscribe;


    //this useEffect only runs once to initailize
    //createUserDocumentFromAuth(user) listner
    //and the value is always the same. We can pass the dispatch if warning  occurs
    //[dispatch]) but doesnt affect the code
  // }, []);

  //testing the new created Promise to replace the above observable async-await
useEffect(()=>{

// getCurrentUser().then((user)=>console.log('phone user is the',user));
// // getCurrentUser();

dispatch(checkUserSession());

  }, []);

  return (

    <Routes>
      {/* navigation component displays in the all child/nested routing */}
      <Route path="/" element={<Navigation />}>
        {/* index represent to say 'true' and if '/' then display the 'Home'
        component instead of navigating the /home routing  */}
        {/* <Route path="/home" element={<Home />} /> */}
        <Route index element={<Home />} />

        {/* <Route path="shop" element={<ShowItems />} /> */}
        {/* the following wildcard or astrix(*) tells the shop route
has another route and it matchs shop/sub-route. And it always first route <Shop> and then
the route goes into the sub-routes that are located inside Shop compoent */}

        {/* <Route path="shop" element={<Shop />} /> */}
        <Route path="shop/*" element={<Shop />} />

        <Route path="auth" element={<Authentication />} />
        {/* the nested path makes us visit sub-routing */}
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
