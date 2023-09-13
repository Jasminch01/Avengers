import { useState } from "react";
import Cards from "./components/cards/Cards";
import Cart from "./components/cart/Cart";

function App() {
  const [cartItmes, setCart] = useState([]);
  const [cost, setCost] = useState(0);
  const [totalReamining, setTotalReamining] = useState(0)
  const budget = 20000;

  
  const selectHandler = (card, id) => {
    const newCartItems = [...cartItmes, card]
    const dubbleAddHandle = cartItmes.find(cartItme => cartItme.id === id);

    let totalsalary = card.salary;

    if (dubbleAddHandle) {
      return alert('allready Added')
    }else{
      cartItmes.forEach((item) => {
        totalsalary += item.salary;
      })

      const totalReamining = budget - totalsalary;
      if (totalsalary > budget) {
        return alert('your budget is low')
      }
      setCost (totalsalary);
      setTotalReamining(totalReamining)
      setCart(newCartItems);
    }
  }

  return (
    <>
      <div className="flex justify-evenly md:gap-5 my-20">
        <Cards selectHandler = {selectHandler}></Cards>
        <Cart cartItmes = {cartItmes} budget = {budget} cost = {cost} totalReamining = {totalReamining}></Cart>
      </div>
    </>
  );
}

export default App;
