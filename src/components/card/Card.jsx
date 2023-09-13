import PropTypes from "prop-types";

const Card = ({ card }) => {
  const { name, age, image, salary, role } = card;
  return (
    <div className="p-5 border-2 border-white rounded-xl text-center space-y-5  backdrop-blur-sm">
      <div className="flex justify-center">
        <img className="rounded-full ring-4 ring-white" src={image} alt="" />
      </div>
      <div className="cart-body">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p className="text-xl font-medium">Age : {age}</p>
        <p className="text-xl">Price : {salary} $</p>
        <p className="font-semibold">{role}</p>
        <button className="p-3 backdrop-blur-xl border-white border-2 rounded-lg mt-5">Select</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
