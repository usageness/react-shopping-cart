import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getProduct } from 'actions/products';
import Layout from 'components/Layout';
import EmptyProductItem from 'components/EmptyProductItem';
import DetailProductItem from 'components/DetailProductItem';
import { ProductDetailWrapper } from './styles';

const ProductDetail = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { item: product, errorMessage } = useSelector((state) => state.product);

  const id = searchParams.get('id');

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  return (
    <Layout>
      <ProductDetailWrapper>
        {errorMessage && <h1>{errorMessage}</h1>}
        {product ? (
          <DetailProductItem
            key={product.id}
            id={Number(product.id)}
            image={product.image}
            name={product.name}
            price={Number(product.price)}
          />
        ) : (
          <EmptyProductItem />
        )}
      </ProductDetailWrapper>
    </Layout>
  );
};

export default ProductDetail;