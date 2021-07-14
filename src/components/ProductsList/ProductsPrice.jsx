import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export const ProductsPrice = () => {
	const products = useSelector(state => state.allProducts.products);
	const history = useHistory();

	const renderList = products.map(product => {
		const { id, title, image, price, category } = product;

		const goToProduct = () => {
			history.push(`/product/${id}`);
		};

		return (
			<div className='four wide column' key={id} onClick={goToProduct}>
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
					</div>
				</div>
			</div>
		);
	});

	return <>{renderList}</>;
};
