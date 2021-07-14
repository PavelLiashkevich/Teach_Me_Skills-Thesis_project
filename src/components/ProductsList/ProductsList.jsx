import React, { useEffect } from 'react';
import axios from 'axios';
import { setProducts } from '../../redux/actions/productActions';
import { useDispatch } from 'react-redux';
import { ProductsPrice } from './ProductsPrice';

export const ProductsList = () => {
	const dispatch = useDispatch();

	const fetchProducts = async () => {
		const response = await axios
			.get('https://fakestoreapi.com/products')
			.catch(err => {
				console.log('Err: ', err);
			});
		dispatch(setProducts(response.data));
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className='ui grid container'>
			<ProductsPrice />
		</div>
	);
};
