import { useDispatch, useSelector } from 'react-redux';
import { AddedProduct } from './AddedProduct';
import { useHistory } from 'react-router';
import { clearBasket } from '../../redux/actions/productActions';

export const Basket = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const products = useSelector(state => state.addedProducts.products);
	const productsInBasket = products.map(product => {
		const { id, title, image, price, category } = product;

		const onCLick = () => {
			history.push('/');
			alert(
				'Спасибо. Заявка принята. В ближайшее время с Вами свяжется наш менеджер'
			);
			dispatch(clearBasket());
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
