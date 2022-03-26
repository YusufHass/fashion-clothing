import Home from "./routes/home/home.component";
import { Outlet, Route, Routes } from "react-router-dom";

const ShopGreating = () => {
  return (
    <>
      <h1>Welcome to Fashion Clothing Store</h1>
      <h1 style={{ color: "red" }}>Enjoy your selections</h1>
    </>
  );
};

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am the navigation bar</h1>
      </div>
      <Outlet />
    </div>
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
        <Route path="greet" element={<ShopGreating />} />
{/* the nested path makes us visit sub-routing */}
      </Route>
    </Routes>
  );
};

export default App;
