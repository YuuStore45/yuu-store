import { useCartContext } from "../context/CartContext";

export default function Cart() {
  const { cartProducts } = useCartContext();

  return (
    <div>
      {cartProducts.map((product) => (
        <div key={Math.random()}>{product.product.title}</div>
      ))}
    </div>
  );
}
