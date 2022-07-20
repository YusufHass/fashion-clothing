//this component is changing from the .scss styling to 
//the 'style' which is a part of jsx. While the .scss
// required the .navigation for example the 'style' is 
//based on the component

import { Link } from 'react-router-dom';
import styled from 'styled-components';



//the benefit of using styled is that the styled components will assigned 
//a unique identification for each component so the 
//there will be no overlap. With .scss we need to
//make sure all of the style name must be unique otherwise if we
// use similar name in two different components then the style of will overlap with the other
// example the following NavigationContainer will have unique id so if we use similar name in differt componet then the style will not be similar bc of the assigned unique name
//

// to check the unique id, go to inspection in chrome and see the unique name under the style/
// for example NavigationContainer has automatically assigned the  unique id of  'dPspKT'
// 

// to use the styled component, we creats a component
//that styles our component. We export it and use it in 
//our component. Also the styled has the div and and another components
//and use the back-tick [``]
export const NavigationContainer=styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;

`
// .navigation {

//   .logo-container {
//     height: 100%;
//     width: 70px;
//     padding: 25px;
//   }

export const LogoContainer= styled(Link)`
     height: 100%;
    width: 70px;
    padding: 25px;

`
//   .nav-links-container {
//     width: 50%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;
//     .nav-link {
//       padding: 10px 15px;
//       cursor: pointer;
//     }
//   }

export const NavLinksContainer= styled.div`
width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
export const NavLink= styled(Link)`
padding: 10px 15px;
      cursor: pointer;
`



// }
