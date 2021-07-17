import { useState } from 'react';

export const AddedProduct = ({ image, title, price, category }) => {
	const [count, setCount] = useState(1);

	const inc = () => {
		setCount(count + 1);
	};

	const reset = () => {
		setCount(0);
	};

	return (
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
				</div>
			</div>
		</div>
	);
};
