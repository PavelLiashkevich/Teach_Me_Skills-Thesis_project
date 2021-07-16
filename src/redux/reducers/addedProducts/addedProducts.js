import { ActionTypes } from '../../constants/action-types';

const initialState = {
	products: [],
};

export const addedProducts = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.ADD_PRODUCT_TO_BASKET:
			const updatedProducts = [...state.products];
			updatedProducts.push(payload);

			return { ...state, products: [...updatedProducts] };
		default:
			return state;
	}
};
