import './catagories.styles.scss'

import Catagory from './components/catagory-item/catagory-item.component';
const App = () => {

  const catagories= [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];
  return (
    <div className="categories-container">
      {/* we can pass as catagories.map((catagory)=>(
        <Catagory catagory= {catagory}/>
        then we can distructure by passing catagory into th e catagiry-item-component.jsk and then
        assining the value as const {title, imageUrl}= catagory
      ))*/}
      {catagories.map(({title, imageUrl, id})=>(
        <Catagory key={id} title= {title} imageUrl= {imageUrl}/>
      ))}
      </div>
  );
};

export default App;
