import cl from "./Product.module.css";
import { Link } from "react-router-dom";
export const ProductItem = ({ id ,img, title, descr, count, price }) => {

  return (
    <div className={cl.product_item}>
      <img src={img} alt="" className={cl.product_img} />
      <div className={cl.product_data}>
        <h4 className={cl.product_title}> {title}</h4>
        <p className={cl.product_descr}>{descr}</p>
        <Link to={`/${id}`}  className={cl.product_button}> More </Link> 
      </div>
      <div className={cl.utils}>
        <span className={cl.price}>{price}$</span>
        <span>Осталось: {count}</span>
      </div>
    </div>
  );
};
