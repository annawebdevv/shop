import {  useContext } from "react";
import { ProductsContext } from "../../../App";
import { getArray } from "../../../hooks/usePagination";
import { productsApi } from "../../../store/servises";
import { Pagination } from "./Pagination";
import { ProductItem } from "./ProductItem";

export const Products = () => {
  let count = 5;
  let pages = [];
  const { state } = useContext(ProductsContext);

  const skip = count * (state.currentPage - 1);
  const { data: categories } = productsApi.useGetCategoriesQuery();


  const{ data, refetch } =
    categories && state.category !== null
      ? productsApi.useGetProductsOfCategoriesQuery({
          category: categories[state.category],
        })
      : state.search === ""
      ? productsApi.useGetProductsQuery({ count, skip })
      : productsApi.useGetSearchProductsQuery({search: state.search, skip})

  if (data) pages = getArray(data.total / count);

  return (
    <div>
      {data &&
        data.products.map((p) => (
          <ProductItem
            title={p.title}
            img={p.images[0]}
            price={p.price}
            descr={p.description}
            count={p.stock}
            key={p.id}
            id={p.id}
          />
        ))}
      {pages.length > 6 && (
        <Pagination
          pages={pages}
          refetch={refetch}
        />
      )}
    </div>
  );
};
