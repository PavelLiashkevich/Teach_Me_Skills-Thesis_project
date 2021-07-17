import { useSelector } from 'react-redux';
import { AddedProduct } from './AddedProduct';

export const Basket = () => {
	const products = useSelector(state => state.addedProducts.products);
	const productsInBasket = products.map(product => {
		const { id, title, image, price, category } = product;

		const onCLick = () => {
			alert(
				'Спасибо. Заявка принята. В ближайшее время с Вами свяжется наш менеджер'
			);
		};

		return (
			<>
				<>
					<AddedProduct
						id={id}
						title={title}
						image={image}
						price={price}
						category={category}
					/>
				</>
				<div className='button-container'>
					<button className='gradient-button' onClick={onCLick}>
						Оформить заказ
					</button>
				</div>
			</>
		);
	});

	return <>{productsInBasket}</>;
};
