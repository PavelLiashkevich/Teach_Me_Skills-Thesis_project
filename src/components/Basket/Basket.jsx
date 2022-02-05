import { useSelector } from 'react-redux';
import { AddedProduct } from './AddedProduct';

export const Basket = () => {
	const products = useSelector(state => state.addedProducts.products);
	const productsInBasket = products.map(product => {
		const { id, title, image, price, category } = product;

		return (
			<AddedProduct
				key={id}
				title={title}
				image={image}
				price={price}
				category={category}
			/>
		);
	});

	return <>{productsInBasket}</>;
};
