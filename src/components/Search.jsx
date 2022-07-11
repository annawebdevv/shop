import { useContext, useRef } from "react";
import { Button } from "../Button/Button";

import Icon from "./../Input/icon.svg";
import { ProductsContext } from "./../App";

export const Search = () => {
  const searchRef = useRef("");
  const { state, setState } = useContext(ProductsContext);

  const handleSearch = async () => {
   let search =  searchRef.current.value.trim()
   if (search ==="") return
    setState({
      ...state,
      search: searchRef.current.value,
      category: null,
      currentPage: 1,
    });
  };

  return (
    <div className="search">
      <div className="input_container">
        <img src={Icon} alt="" className="search_img" />
        <input ref={searchRef} maxLength={40} className="search_input" />
        <Button className="search_button primary" onClick={handleSearch}>
          {" "}
          Search{" "}
        </Button>
      </div>
    </div>
  );
};
