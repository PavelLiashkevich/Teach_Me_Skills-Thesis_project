import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectedProduct,
	removeSelectedProduct,
} from '../../redux/actions/productActions';

export const ProductInfo = () => {
	const { productId } = useParams();
	let product = useSelector(state => state.product);
	const { image, title, price, category, description } = product;
	const dispatch = useDispatch();

	const fetchProductInfo = async id => {
		const response = await axios
			.get(`https://fakestoreapi.com/products/${id}`)
			.catch(err => console.log('Err:', err));

		dispatch(selectedProduct(response.data));
	};

	useEffect(() => {
		if (productId && productId !== '') fetchProductInfo(productId);
		return () => {
			dispatch(removeSelectedProduct());
		};
	}, [productId]);

	return (
		<div className='ui grid container'>
			{Object.keys(product).length === 0 ? (
				<button className='ui loading huge button'>Загрузка</button>
			) : (
				<div className='ui placeholder segment'>
					<div className='ui two column stackable center aligned grid'>
						<div className='ui vertical divider'>AND</div>
						<div className='middle aligned row'>
							<div className='column lp'>
								<img className='ui fluid image' src={image} alt={title} />
							</div>
							<div className='column rp'>
								<h1>{title}</h1>
								<h2>
									<a className='ui teal tag label'>${price}</a>
								</h2>
								<h3 className='ui brown block header'>{category}</h3>
								<p>{description}</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
