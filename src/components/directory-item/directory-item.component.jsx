//the following component of DirectoryItem
//displays the backround image, title and 'Shop Now ' text each item once
//it distructuring/recieves the image and title from the Directory component

import { useNavigate } from "react-router-dom";
import {BackGroundImageStyle, Body, DirectoryContainerStyle} from "../directory-item/directory-item.styles";

const DirectoryItem = ({ categoryList }) => {
  const {title, imageUrl,route}= categoryList;
//use navigate is used to route to different links or routings 
  const navigate= useNavigate();

  const OnNavigateHandler=()=>{

    navigate(route)
  }
  return (
   /*  //so basically clicking the OnNavigateHandler on the following code, then it will takes us
    //the link on each intended category. We added the link in the container level so 
    it will routes if we click anywhere in the contaianer and if we add it in the title or body 
    then it will routes only when we click the title or the body accordingly
    // */
      <DirectoryContainerStyle onClick={OnNavigateHandler} >
        <BackGroundImageStyle 
          // className="background-image"
          //now passing the imageUrl as props so we can access it inside the 
          //directory.styles.js
          imageUrl= {imageUrl}
       /* the following style is custom style what react offers the features   */

          // style={{
          //   backgroundImage: `url(${imageUrl})`,
          // }}
        ></BackGroundImageStyle>
        <Body >
          <h2>{title} </h2>
          <p>Shop Now</p>
        </Body>
      </DirectoryContainerStyle>
  );
};
export default DirectoryItem;
