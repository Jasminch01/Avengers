import Cards from "./components/cards/Cards";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <>
      <div className="flex justify-between my-20">
        <Cards></Cards>
        <Cart></Cart>
      </div>
    </>
  );
}

export default App;
