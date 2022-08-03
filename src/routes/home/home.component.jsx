// import "./catagories.styles.scss";

import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory-list.component";

const Home = () => {
  
  return (
    <>
      <Directory />
      <Outlet></Outlet>
      {/* <Outlet makes the nested routing (greet route in the home-component.jsx) display at the bottom of the page
      . if we place it above the DirectoryList then it shows above the page  */}
    </>
  );
};

export default Home;
