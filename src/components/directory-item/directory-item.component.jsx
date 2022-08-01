//the following component of DirectoryItem
//displays the backround image, title and 'Shop Now ' text each item once
//it distructuring/recieves the image and title from the Directory component

import {BackGroundImageStyle, Body, DirectoryContainerStyle} from "../directory-item/directory-item.styles";

const DirectoryItem = ({ title, imageUrl }) => {
  return (
      <DirectoryContainerStyle>
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
        <Body>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Body>
      </DirectoryContainerStyle>
  );
};
export default DirectoryItem;
