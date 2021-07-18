import { ActionTypes } from '../../constants/action-types';

const initialState = {
	products: [],
};

export const addedProducts = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.ADD_PRODUCT_TO_BASKET:
			const updatedProducts = [...state.products];
			updatedProducts.push(action.payload);
			return { ...state, products: [...updatedProducts] };

		case ActionTypes.CLEAR_BASKET:
			return { ...state, products: [] };

		default:
			return state;
	}
};
