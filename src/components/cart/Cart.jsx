import PropTypes from "prop-types";


const Cart = ({ cartItmes, budget, cost, totalReamining }) => {
  return (
    <div className=" backdrop-blur-sm border-2 border-white p-5 w-[300px]  h-[70vh] rounded-xl fixed right-20">
      <div className="text-center">
        <h1 className="text-2xl font-bold my-3">CART</h1>
        <hr />
        <h1 className="text-xl font-bold">Budget : {budget} $</h1>
        <p className="text-xl font-bold">Total Cost : {cost}</p>
        <p>Total Reaming : {totalReamining}</p>
      </div>
      <div className="my-3">
        {cartItmes.map((cartItem, i) => (
          <h1 key={i} className="text-xl font-semibold">
            {cartItem.name}
          </h1>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartItmes: PropTypes.array.isRequired,
  budget: PropTypes.number.isRequired,
  cost : PropTypes.number.isRequired,
  totalReamining : PropTypes.number.isRequired
};
export default Cart;
