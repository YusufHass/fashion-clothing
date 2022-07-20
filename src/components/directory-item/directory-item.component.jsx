//the following component of DirectoryItem
//displays the backround image, title and 'Shop Now ' text each item once
//it distructuring/recieves the image and title from the Directory component

import "./directory-item.styles.scss";

const DirectoryItem = ({ title, imageUrl }) => {
  return (
      <div className="directory-item-container">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>
        <div className="body">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
  );
};
export default DirectoryItem;
