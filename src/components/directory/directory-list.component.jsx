
import Shop from "../../routes/shop/shop.component";
import CatagoryItem from "../catagories/catagory-item.component";
import './directory-list.styles.scss'
const DirectoryList = ({catagories}) => {

  return (
    <div className="directory-container">
      {/* we can pass as catagories.map((catagory)=>(
      <Catagory catagory= {catagory}/>
      then we can distructure by passing catagory into th e catagiry-item-component.jsk and then
      assining the value as const {title, imageUrl}= catagory
    ))*/}
      {catagories.map(({ title, imageUrl, id }) => (
        <CatagoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};
export default DirectoryList;
