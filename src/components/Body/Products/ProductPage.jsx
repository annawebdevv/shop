import { useParams, useNavigate } from "react-router-dom";
import { productsApi } from "../../../store/servises";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import "swiper/css";
import "swiper/css/navigation";



export const ProductPage = () => {
  const { id } = useParams();
  const navigate= useNavigate()
  const { data: product, isLoading } = productsApi.useGetProductByIdQuery({
    id,
  });
  console.log(product);

  return product ? (
    <div>
        <button onClick={()=>navigate(-1)} className="button link"> Назад </button>
      <h4> {product.title}</h4>
      <p> category: {product.category} </p>
      <p>{product.description}</p>
      <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={5}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              >
        {product.images.map((i) => (
          <SwiperSlide>
            <img src={i} alt="" />
          </SwiperSlide>
          
        ))}
      </Swiper>

      <div>
          <p>Price:  { product.price}$</p>
      </div>
    </div>
  ) : (
    isLoading
  );
};
