import { CheckBox } from "./CheckBox";
import { productsApi } from "../../../store/servises";
import { useContext, useState } from "react";
import { ProductsContext } from "../../../App";
import styled from "styled-components";

export const Categories = () => {
  const { state, setState } = useContext(ProductsContext);
  const { data: categories } = productsApi.useGetCategoriesQuery();
  const [open, setOpen] = useState(false);
  const handleClick = (i) => {
    setState({ ...state, search: " ", category: i, currentPage: 1 });
    setOpen(false);
  };

  return (
    <div className="categories">
      <h3 className="category_title"> Категории: </h3>
      <button className="select_button" onClick={() => setOpen(!open)}>
        {" "}
        {state.category === null
          ? "Категории"
          : categories[state.category]}{" "}
      </button>

      {state.category !== null && open !== true ? (
        <button
          onClick={() => setState({ ...state, category: null })}
          className="outline">
          очистить категорию
        </button>
      ) : (
        " "
      )}

      <CategoryList open={open}>
        {categories &&
          categories.map((c, i) => (
            <li key={c} onClick={() => handleClick(i)}>
              <CheckBox
                checked={i === state.category}
                name="category"
                value={c[0].toUpperCase() + c.slice(1)}
                round="round"
              />
            </li>
          ))}
      </CategoryList>
    </div>
  );
};

const CategoryList = styled.ul`
  display: ${(props) => (props.open ? "block" : "none")};
  @media (min-width: 600px) {
    display: block;
  }
`;
