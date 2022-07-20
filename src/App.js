import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const ShowItems = () => {
  return (
    <>
      <h1>Welcome to Fashion Clothing Store</h1>
      <h1 style={{ color: "red" }}>Enjoy your selections</h1>
    </>
  );
};

const App = () => {
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
