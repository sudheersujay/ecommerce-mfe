import dynamic from "next/dynamic";

const Basket = dynamic(() => import("basket/Basket"), { ssr: false });
const ProductList = dynamic(() => import("products/ProductList"), { ssr: false });

export default function HomePage() {
  return (
    <div>
      <h1>Host App</h1>
      <ProductList />
      <Basket />
    </div>
  );
}
