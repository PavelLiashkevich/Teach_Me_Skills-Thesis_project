import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {
	const products = useSelector(state => state.addedProducts.products);

	return (
		<>
			<div className='ui fixed menu'>
				<div className='ui container center padding-text'>
					<Link to='/'>
						<h2>My Shop</h2>
					</Link>
				</div>
				<div className='icon-basket'>
					<Link to='/basket'>
						<i className='fas fa-shopping-basket'></i>
					</Link>
					<div className='all-products'>{products.length}</div>
				</div>
			</div>
		</>
	);
};
