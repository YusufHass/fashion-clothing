import Home from "./routes/home/home.component";
import {Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/signin/sign-in.component";
const Shop = () => {
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
        {/* <Route path="/home" element={<Home />} /> */}
        <Route index element={<Home />} />
        {/* index represent to say 'true' and if '/' then display the 'Home'
        component instead of navigating the /home routing  */}
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
{/* the nested path makes us visit sub-routing */}
      </Route>
    </Routes>
  );
};

export default App;
