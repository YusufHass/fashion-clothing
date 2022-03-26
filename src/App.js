import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";

const ShopGreating=()=>{


  return (
    <>
    <h1>Welcome to Fashion Clothing Store</h1>
    <h1 style={{color: 'red'}}>Enjoy your selections</h1>

    </>
  )
}
const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
      <Route path="greet" element={<ShopGreating />} />
      {/* home/greet */}
      </Route>
    </Routes>
  );
};

export default App;
