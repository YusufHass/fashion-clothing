import './catagories.styles.scss'
const App = () => {

  const catagories= [

    {
      id: 1,
      title: 'Hats'
    },
    {
      id: 2,
      title: 'Jackets'
    },{
      id: 3,
      title: 'Sneakers'
    },{
      id: 4,
      title: 'Men'
    },{
      id: 5,
      title: 'Women'
    },
  ]
  return (
    <div className="catagories-container">

      {catagories.map(({title})=>(
      <div className="catagory-container">
        {/* {
          imag } */}
          <p> image</p>
          <div className="catagory-body-container">
            <h1>{title}</h1>
            <p>Shop Now</p>
          </div>
      </div>
      ))}
      </div>
  );
};

export default App;
