import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { clearBasket } from '../../redux/actions/productActions';

export const AddedProduct = ({ image, title, price, category }) => {
	const [count, setCount] = useState(1);

	const history = useHistory();
	const dispatch = useDispatch();

	const inc = () => {
		setCount(count + 1);
	};

	const reset = () => {
		setCount(0);
	};

	const onCLick = () => {
		history.push('/');
		alert(
			'Спасибо. Заявка принята. В ближайшее время с Вами свяжется наш менеджер!'
		);
		dispatch(clearBasket());
	};

	return (
		<div className='container'>
			<div className='container-product'>
				<div className='product-item'>
					<img src={image} />
					<div className='product-list'>
						<h3>{title}</h3>
						<span className='price'>$ {price}</span>
						<p className='category'>{category}</p>
						<h4 className='count'>{count}</h4>
						<div className='counter'>
							<button className='gradient-button' onClick={inc}>
								+
							</button>
							<button className='gradient-button' onClick={reset}>
								reset
							</button>
						</div>
						<div className='button-container'>
							<button className='gradient-button' onClick={onCLick}>
								Оформить заказ
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
