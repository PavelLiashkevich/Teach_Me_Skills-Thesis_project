import React from 'react';
import { useSelector } from 'react-redux';
import { Product } from './Product';

export const ProductsPrice = () => {
	const products = useSelector(state => state.allProducts.products);

	const renderList = products.map(product => {
		const { id, title, image, price, category } = product;

		return (
			<Product
				key={id}
				title={title}
				image={image}
				price={price}
				category={category}
			/>
		);
	});

	return <>{renderList}</>;
};
