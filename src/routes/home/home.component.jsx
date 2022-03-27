// import "./catagories.styles.scss";

import { Outlet } from "react-router-dom";
import DirectoryList from "../../components/directory/directory-list.component";

const Home = () => {
  const catagories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];
  return (
    <>
      <DirectoryList catagories={catagories} />
      <Outlet></Outlet>
      {/* <Outlet makes the nested routing (greet route in the home-component.jsx) display at the bottom of the page
      . if we place it above the DirectoryList then it shows above the page  */}
    </>
  );
};

export default Home;