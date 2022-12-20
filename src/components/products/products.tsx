import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getActionProduct } from "./reducer/ActionProduct";
import {useNavigate} from "react-router-dom";

const Products = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const { products } = useAppSelector((state) => state.ReducerProduct);
  useEffect(() => {
    dispatch(getActionProduct());
  }, []);
  return (
    <div className="max-w-[500px] mx-auto px-[22px]">
      {products.map((items, index) => (
        <div className="mb-[33px]" key={index}>
          <img
            src={items.image}
            alt="no img"
            className="w-full object-cover h-auto rounded-[16px] mb-[19px] object-cover"
          />
          <p className="text-center px-[20px] text-[22px] font-[600] mb-[22px]">
            {items.title}
          </p>
          <p className="text-center text-[#BEBEBE] text-[18px]">
            {items.description}
          </p>
          <button onClick={()=> navigate(items.visit_website_url_url)}>items.visit_website_url_name</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
