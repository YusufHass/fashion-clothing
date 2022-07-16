//the following component recieves the the main categories from
//Home component and map them into DirectoryItem which recieves and display them in the screen

import Shop from "../../routes/shop/shop.component";
import DirectoryItem from "../directory-item/directory-item.component";
import './directory-list.styles.scss'
const Directory = ({catagories}) => {

  return (
    <div className="directory-container">
      {/* we can pass as catagories.map((catagory)=>(
      <Catagory catagory= {catagory}/>
      then we can distructure by passing catagory into th e catagiry-item-component.jsk and then
      assining the value as const {title, imageUrl}= catagory
    ))*/}
      {catagories.map(({ title, imageUrl, id }) => (
        <DirectoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};
export default Directory;
