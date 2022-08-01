/* 
   Here I changed the scss style I previosly had which is now located at the end
   of the page with a comment into the styled components that react provide us
*/

import styled from 'styled-components'

export const BackGroundImageStyle= styled.div `
width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      //here we are getting the props we passed in the directory-component
      background-image: ${({imageUrl})=>`url(${imageUrl})`};
`

export const Body= styled.div`
//since we have only one h2 and one p tag for styling, we can add here as 
//a nested and if we have additional tag styles then we add them in the similar 
//fashion


height: 90px;
padding: 0 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid black;
background-color: white;
opacity: 0.7;
position: absolute;

h2 {
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
}

p {
  font-weight: lighter;
  font-size: 16px;
  text-transform: uppercase;
}

`

export const DirectoryContainerStyle= styled.div`

min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;
  
    &:hover {
      cursor: pointer;
  
      & ${BackGroundImageStyle}
      //& .background-image {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
  //the 'Body' is declare in the above lines
      & ${Body} {
        opacity: 0.9;
      }
    }

    &:first-child {
      margin-right: 7.5px;
    }
  
    &:last-child {
      margin-left: 7.5px;
    }
`

// using 'sass' styling usage instead of css
// first install using 'npm add sass'

//the following used to style the parent and child container using
/*
.catagories-container {
    background-color: red;
    padding: 10px;
}
.catagories-container .catagory-container{
    background-color: green;
    padding: 10px
}

.catagories-container .catagory-container .catagory-body-container{
    background-color: blue;
}
*/

// using 'sass' it simplifies

/*.catagories-container {
  background-color: red;
  padding: 10px;
    .catagory-container {
      background-color: green;
      padding: 30px;
      .catagory-body-container {
        background-color: blue;
        padding: 10px;
      }
    }
  }
  */

/* 
  .directory-item-container {
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;
  
    &:hover {
      cursor: pointer;
  
      & .background-image {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
  
      & .body {
        opacity: 0.9;
      }
    }
  
    &.large {
      height: 380px;
    }
  
    &:first-child {
      margin-right: 7.5px;
    }
  
    &:last-child {
      margin-left: 7.5px;
    }
  
    .background-image {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
    }
  
    .body {
      height: 90px;
      padding: 0 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      background-color: white;
      opacity: 0.7;
      position: absolute;
  
      h2 {
        font-weight: bold;
        margin: 0 6px 0;
        font-size: 22px;
        color: #4a4a4a;
      }
  
      p {
        font-weight: lighter;
        font-size: 16px;
      }
    }
  }
  
 */








