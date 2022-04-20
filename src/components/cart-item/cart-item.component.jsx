import "./cart-item.styles.scss";
const CartItem = ({ cartItem }) => {
  const { name, quantity} = cartItem;
  return (
    <div className="di">
      <h1>{name}</h1>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
