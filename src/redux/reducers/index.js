import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { selectedProductsReducer } from './selectedProductsReducer';

const reducers = combineReducers({
	allProducts: productsReducer,
	product: selectedProductsReducer,
});

export default reducers;
