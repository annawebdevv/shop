import { Products } from "./Products/Products";
import { SideBar } from "./SideBar/SideBar";
import { useState } from "react";
import { Search } from "../Search";

export const Body = () => {
  const [active, setActive] = useState(null);

  return (
    <div>
      <Search />
      <div className="body">
        <SideBar active={active} setActive={setActive} />
        <Products active={active} />
      </div>
    </div>
  );
};
