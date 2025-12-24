import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
      <main className="">
        <section className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4
        m-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>
      </main>
  );
}
