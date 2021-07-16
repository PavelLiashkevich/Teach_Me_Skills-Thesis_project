import { combineReducers } from 'redux';
import { addedProducts } from './addedProducts';
import { productsReducer } from './productsReducer';
import { selectedProductsReducer } from './selectedProductsReducer';

const reducers = combineReducers({
	allProducts: productsReducer,
	product: selectedProductsReducer,
	addedProducts: addedProducts,
});

export default reducers;
