import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { addProductToBasket } from '../../redux/actions/productActions';

export const Product = ({ id, title, image, price, category }) => {
	const history = useHistory();
	const dispatch = useDispatch();

	const goToProduct = () => {
		history.push(`/product/${id}`);
	};

	const addProduct = () => {
		const payload = {
			id,
			title,
			image,
			price,
			category,
		};

		dispatch(addProductToBasket(payload));
	};

	return (
		<div className='four wide column' key={id}>
			<div className='ui link cards'>
				<div className='card'>
					<div className='image'>
						<img src={image} alt={title} />
					</div>
					<div className='content'>
						<div className='header'>{title}</div>
						<div className='meta price'>$ {price}</div>
						<div className='meta'>{category}</div>
					</div>
					<div className='ui animated button' onClick={goToProduct}>
						<div className='visible content'>MORE INFO</div>
						<div className='hidden content'>
							<i className='right arrow icon'></i>
						</div>
					</div>
					<div className='ui vertical animated button' onClick={addProduct}>
						<div className='hidden content'>SHOP</div>
						<div className='visible content'>
							<i className='shop icon'></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
