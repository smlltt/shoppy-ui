import CreateProductButton from "./components/products/createProductButton";
import Products from "./components/products/products";
import { createLoader, parseAsInteger, type SearchParams } from "nuqs/server";

type PageProps = {
  searchParams: SearchParams;
};

const loadSearchParams = createLoader({
  page: parseAsInteger.withDefault(0),
});

export default async function Home({ searchParams }: PageProps) {
  const { page } = await loadSearchParams(searchParams);

  return (
    <>
      <Products page={page} />
      <CreateProductButton />
    </>
  );
}
