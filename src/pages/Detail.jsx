import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";

const Detail = () => {
  const { slug } = useParams();
  // console.log(slug);
  const [product, setproduct] = useState("");

  useEffect(() => {
    fetch(`https://fashion-v6.onrender.com/product/detail/${slug}`)
      .then((response) => response.json())
      .then((data) => setproduct(data));
  }, []);

  return (
    <React.Fragment>
      {product && <ProductDetail product={product} />}
    </React.Fragment>
  );
};

export default Detail;
