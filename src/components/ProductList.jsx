import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/productSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productList = Object.values(products);

  return (
    <div>
      <h2>Список товаров</h2>
      {productList.length > 0 ? (
        <ul>
          {productList.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <div>Нет доступных товаров.</div>
      )}
    </div>
  );
};

export default ProductList;
