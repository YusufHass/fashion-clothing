//the following component recieves the the main categories from
//Home component and map them into DirectoryItem which recieves and display them in the screen

import Shop from "../../routes/shop/shop.component";
import DirectoryItem from "../directory-item/directory-item.component";
import './directory-list.styles.scss'

/* We brought the categories from the home component to this component and here 
in addition to the orginal component we also add the route so when we 
click each of the categories then it will takes us to the 
shop home page where we listed the categories items */
const catagories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: 'shop/hats'
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: 'shop/jackets'
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: 'shop/sneakers'
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: 'shop/womens'
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: 'shop/mens'
  },
];
const Directory = () => {


  

  return (
    <div className="directory-container">
      {/* we can pass as catagories.map((catagory)=>(
      <Catagory catagory= {catagory}/>
      then we can distructure by passing catagory into th e catagiry-item-component.jsk and then
      assining the value as const {title, imageUrl}= catagory
    ))*/}
      {catagories.map((category) => (
        <DirectoryItem key={category.id} categoryList= {category}/>
      ))}
    </div>
  );
};
export default Directory;
