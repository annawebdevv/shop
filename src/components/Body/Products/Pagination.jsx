import { ReactComponent as Logo } from "./../../../utils/next.svg";
import { ReactComponent as Dots } from "./../../../utils/dots.svg";
import { useContext } from "react";
import { ProductsContext } from "../../../App";

export const Pagination = ({ pages, refetch }) => {
  const {state, setState} = useContext(ProductsContext)
  
  const oneThree = state.currentPage <= 3;
  const threeToLast = state.currentPage > 3 && state.currentPage < pages[pages.length - 1];
  const threeLast = state.currentPage > pages[pages.length - 3];
  const notFirst3 = threeToLast || threeLast;

  const changePage = (p) => {
    if (state.currentPage !== p) {
      setState({...state, currentPage: p});
      refetch();
    }
  };

  const nextPage = () => {
    if (state.currentPage !== pages[pages.length]) setState({...state, currentPage: state.currentPage+1}) 
  }

  const prevPage = () => {
    if (state.currentPage !== pages[0]) setState({...state, currentPage: state.currentPage-1}) 
  };
  
  let res = [];

  if (oneThree) {
    res = pages.filter((el, i, arr) => el <= 4);
  }
  if (threeToLast) {
    res = pages.filter(
      (el, i, arr) =>
        el === state.currentPage - 1 || el === state.currentPage || el === state.currentPage + 1
    );
  }
  if (threeLast) {
    res = pages.filter((el, i, arr) => el > pages[pages.length - 4]);
  }

  return (
    <div className="pagination">
      <Logo className="prev outline button_pagination" onClick={prevPage} />

      {notFirst3 && (
        <button
          className={[
            "button_pagination",
            state.currentPage === pages[0] ? "primary" : "outline",
          ].join(" ")}
          onClick={() => changePage(pages[0])}>
          {pages[0]}
        </button>
      )}

      {notFirst3 && <Dots className="next  button_pagination" />}

      {res.map((p) => (
        <button
          className={[
            "button_pagination",
            state.currentPage === p ? "primary" : "outline",
          ].join(" ")}
          key={p}
          onClick={() => changePage(p)}>
          {p}
        </button>
      ))}

      {!threeLast && <Dots className="next button_pagination" />}

      {!threeLast && (
        <button
          className={[
            "button_pagination",
            state.currentPage === pages[pages.length - 1] ? "primary" : "outline",
          ].join(" ")}
          onClick={() => changePage(pages[pages.length - 1])}>
          {pages[pages.length - 1]}
        </button>
      )}

      <Logo className="next outline button_pagination" onClick={nextPage} />
    </div>
  );
};
